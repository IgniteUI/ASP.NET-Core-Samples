using Entities.Models;
using Interfaces.Repositories;

namespace Interfaces
{
    public interface IProductRepository : IRepository<Product>
    {
        Product GetProductByName(string productName);
    }
}