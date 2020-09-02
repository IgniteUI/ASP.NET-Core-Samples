using Entities;
using Interfaces;
using System.Threading.Tasks;

namespace Repositories
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly NorthwindDbContext _context;
        public ICategoryRepository Categories { get; private set; }
        public IProductRepository Products { get; private set; }
        public IOrderDetailRepository OrderDetails { get; private set; }
        public IOrderRepository Orders { get; private set; }

        public UnitOfWork(NorthwindDbContext context)
        {
            _context = context;
            Categories = new CategoryRepository(_context);
            Products = new ProductRepository(_context);
            Orders = new OrderRepository(_context);
            OrderDetails = new OrderDetailRepository(_context);
        }

        public void Save()
        {
            _context.SaveChanges();
        }

        public async Task<int> SaveAsync()
        {
            return await _context.SaveChangesAsync();
        }

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}