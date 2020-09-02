using Entities.Models;
using Entities.Queries;
using Interfaces.Repositories;
using System.Collections.Generic;

namespace Interfaces
{
    public interface IOrderDetailRepository : IRepository<OrderDetail>
    {
        OrderDetail GetOrderDetailsById(string id);

        IEnumerable<ExtendedOrder> GetExtendedOrders();
    }
}