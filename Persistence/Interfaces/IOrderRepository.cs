using Entities.Models;
using Interfaces.Repositories;

namespace Interfaces
{
    public interface IOrderRepository : IRepository<Order>
    {
        Order GetOrderById(int id);
    }
}