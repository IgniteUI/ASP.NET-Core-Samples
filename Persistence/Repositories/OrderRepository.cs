using Entities;
using Entities.Models;
using Interfaces;
using System.Linq;

namespace Repositories
{
    public class OrderRepository : Repository<Order>, IOrderRepository
    {
        public NorthwindDbContext NorthwindDbContext
        {
            get { return Context as NorthwindDbContext; }
        }

        public OrderRepository(NorthwindDbContext context) : base(context)
        {
        }

        public Order GetOrderById(int orderId)
        {
            return Find(order => order.Id.Equals(orderId))
                .DefaultIfEmpty(new Order())
                .FirstOrDefault();
        }
    }
}