using Entities;
using Entities.Models;
using Interfaces;
using System.Linq;

namespace Repositories
{
    public class ProductRepository : Repository<Product>, IProductRepository
    {
        public NorthwindDbContext NorthwindDbContext
        {
            get { return Context as NorthwindDbContext; }
        }

        public ProductRepository(NorthwindDbContext context) : base(context)
        {
        }

        public Product GetProductByName(string productName)
        {
            return Find(product => product.ProductName.Contains(productName))
                 .DefaultIfEmpty(new Product())
                 .FirstOrDefault();
        }
    }
}