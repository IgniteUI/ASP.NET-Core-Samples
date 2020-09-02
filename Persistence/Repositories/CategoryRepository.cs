using Entities;
using Entities.Models;
using Entities.Queries;
using Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Repositories
{
    public class CategoryRepository : Repository<Category>, ICategoryRepository
    {
        public CategoryRepository(NorthwindDbContext context) : base(context)
        {
        }

        public NorthwindDbContext NorthwindDbContext
        {
            get { return Context as NorthwindDbContext; }
        }

        public IEnumerable<UnitsSoldByCategoryAndSpecificCountries> GetSpecificCountries()
        {
            var partialResult =
                from order in NorthwindDbContext.Orders
                join orderDetail in NorthwindDbContext.OrderDetails on order.Id equals orderDetail.OrderId
                join product in NorthwindDbContext.Products on orderDetail.ProductId equals product.Id
                join category in NorthwindDbContext.Categories on product.CategoryId equals category.Id
                group new { orderDetail.Quantity } by new { category.CategoryName, order.ShipCountry } into g
                select new
                {
                    Category = g.Key.CategoryName,
                    Quantity = g.Sum(x => x.Quantity),
                    g.Key.ShipCountry
                };

            var finalResult =
                from record in partialResult.ToList()
                group record by new { record.Category } into g
                select new UnitsSoldByCategoryAndSpecificCountries
                {
                    Category = g.Key.Category,
                    USA = g.Where(s => s.ShipCountry == "USA").Select(x => x.Quantity).FirstOrDefault(),
                    Brazil = g.Where(s => s.ShipCountry == "Brazil").Select(x => x.Quantity).FirstOrDefault(),
                    Germany = g.Where(s => s.ShipCountry == "Germany").Select(x => x.Quantity).FirstOrDefault()
                };
            return finalResult;
        }

        public IEnumerable<UnitsSoldByMonthForSpecificCountries> GetUnitsSoldByMonthForSpecificCountries()
        {
            var partialResult =
              from order in NorthwindDbContext.Orders
              join orderDetail in NorthwindDbContext.OrderDetails on order.Id equals orderDetail.OrderId
              group new { orderDetail.Quantity } by new { order.OrderDate, order.OrderDate.Month, order.ShipCountry } into g
              where g.Key.OrderDate > DateTime.Parse("01/01/2013") && g.Key.OrderDate < DateTime.Parse("01/01/2014")
              select new
              {
                  Month = g.Key.OrderDate.ToString("MMM"),
                  Quantity = g.Sum(x => x.Quantity),
                  g.Key.ShipCountry
              };

            var finalResult =
                from record in partialResult.ToList()
                group record by new { record.Month } into g
                select new UnitsSoldByMonthForSpecificCountries
                {
                    Month = g.Key.Month,
                    USA = g.Where(s => s.ShipCountry == "USA").Select(x => x.Quantity).FirstOrDefault(),
                    Brazil = g.Where(s => s.ShipCountry == "Brazil").Select(x => x.Quantity).FirstOrDefault(),
                    Germany = g.Where(s => s.ShipCountry == "Germany").Select(x => x.Quantity).FirstOrDefault()
                };

            return finalResult;
        }
    }
}