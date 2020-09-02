using Entities;
using Entities.Models;
using Entities.Queries;
using Interfaces;
using System.Collections.Generic;
using System.Linq;

namespace Repositories
{
    public class OrderDetailRepository : Repository<OrderDetail>, IOrderDetailRepository
    {
        public NorthwindDbContext NorthwindDbContext
        {
            get { return Context as NorthwindDbContext; }
        }

        public OrderDetailRepository(NorthwindDbContext context) : base(context)
        {
        }

        public OrderDetail GetOrderDetailsById(string orderId)
        {
            return Find(order => order.Id.Equals(orderId))
                .DefaultIfEmpty(new OrderDetail())
                .FirstOrDefault();
        }

        public IEnumerable<ExtendedOrder> GetExtendedOrders()
        {
            var extendedOrders =
                from od in NorthwindDbContext.OrderDetails
                join o in NorthwindDbContext.Orders on od.OrderId equals o.Id
                join p in NorthwindDbContext.Products on od.ProductId equals p.Id
                join c in NorthwindDbContext.Categories on p.CategoryId equals c.Id
                select new ExtendedOrder
                {
                    OrderID = od.OrderId,
                    OrderDetailsID = od.Id,
                    ProductID = od.ProductId,
                    CategoryID = c.Id,
                    RequiredDate = o.RequiredDate,
                    ProductName = p.ProductName,
                    CategoryName = c.CategoryName,
                    ShipCountry = o.ShipCountry,
                    Quantity = od.Quantity,
                    Discount = od.Discount,
                    isProductDiscontinued = p.Discontinued
                };

            return extendedOrders.ToList();
        }
    }
}