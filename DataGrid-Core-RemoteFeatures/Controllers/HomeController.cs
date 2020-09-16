using DataGrid_Core_RemoteFeatures.Models;
using Entities.Models;
using Entities.Queries;
using Infragistics.Web.Mvc;
using Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;

namespace DataGrid_Core_RemoteFeatures.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private IUnitOfWork _unitOfWork;

        public HomeController(ILogger<HomeController> logger, IUnitOfWork unitOfWork)
        {
            _logger = logger;
            _unitOfWork = unitOfWork;
        }

        public IActionResult Index()
        {
            ViewBag.Categories = _unitOfWork.Categories.GetAll();
            return View();
        }

        [GridDataSourceAction]
        public ActionResult GetOrders()
        {
            var extendedOrders = _unitOfWork.OrderDetails.GetExtendedOrders();
            return View(extendedOrders.AsQueryable());
        }

        public IActionResult UpdateOrders()
        {
            GridModel model = new GridModel();
            List<Transaction<ExtendedOrder>> transactions = model.LoadTransactions<ExtendedOrder>(HttpContext.Request.Form["ig_transactions"]);

            Dictionary<string, string> added = new Dictionary<string, string>();
            JsonResult result;

            try
            {
                foreach (Transaction<ExtendedOrder> t in transactions)
                {
                    Order orderEntity;
                    Product productEntity;
                    OrderDetail orderDetailEntity;

                    switch (t.type)
                    {
                        case "row":
                            orderDetailEntity = _unitOfWork.OrderDetails.GetOrderDetailsById(t.rowId);
                            orderEntity = _unitOfWork.Orders.GetOrderById(orderDetailEntity.OrderId);
                            productEntity = _unitOfWork.Products.GetProductByName(t.row.ProductName);

                            orderDetailEntity.Quantity = t.row.Quantity;
                            orderDetailEntity.ProductId = productEntity.Id;
                            orderDetailEntity.Discount = t.row.Discount;
                            orderEntity.RequiredDate = t.row.RequiredDate;
                            productEntity.Discontinued = t.row.isProductDiscontinued;
                            break;

                        case "newrow":
                            var order = new Order
                            {
                                CustomerId = "VINET",
                                EmployeeId = 1,
                                RequiredDate = t.row.RequiredDate,
                                Freight = 10.2m,
                                ShipCountry = t.row.ShipCountry
                            };
                            _unitOfWork.Orders.Add(order);
                            _unitOfWork.Save();

                            Product product = _unitOfWork.Products.GetProductByName(t.row.ProductName);
                            string orderDetailsID = order.Id + "/" + t.row.Quantity;

                            _unitOfWork.OrderDetails.Add(new OrderDetail
                            {
                                Id = orderDetailsID,
                                OrderId = order.Id,
                                ProductId = product.Id,
                                UnitPrice = (decimal)product.UnitPrice,
                                Quantity = t.row.Quantity,
                                Discount = t.row.Discount
                            });

                            added.Add(t.rowId, orderDetailsID);
                            break;

                        case "deleterow":
                            orderDetailEntity = _unitOfWork.OrderDetails.GetOrderDetailsById(t.rowId);
                            _unitOfWork.OrderDetails.Remove(orderDetailEntity);

                            orderEntity = _unitOfWork.Orders.GetOrderById(orderDetailEntity.OrderId);
                            _unitOfWork.Orders.Remove(orderEntity);
                            break;
                    }
                }
                _unitOfWork.Save();

                result = new JsonResult(new GridResponse()
                {
                    Success = true,
                    AddedRows = added.ToList()
                });
            }
            catch
            {
                result = new JsonResult(new GridResponse() { Success = false });
            }

            return result;
        }

        [ComboDataSourceAction]
        [ActionName("get-products-by-category")]
        public ActionResult ComboDataProducts()
        {
            string categoryID = Request.Form["categoryID"];
            IEnumerable<string> products = _unitOfWork.Products.Find(p => p.CategoryId == short.Parse(categoryID)).Select(product => product.ProductName);
            return View(products);
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}