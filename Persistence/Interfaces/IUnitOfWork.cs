using System;
using System.Threading.Tasks;

namespace Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        ICategoryRepository Categories { get; }
        IProductRepository Products { get; }
        IOrderRepository Orders { get; }
        IOrderDetailRepository OrderDetails { get; }

        void Save();

        Task<int> SaveAsync();
    }
}