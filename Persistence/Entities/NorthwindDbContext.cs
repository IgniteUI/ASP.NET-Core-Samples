using Entities.Models;
using Microsoft.EntityFrameworkCore;

namespace Entities
{
    public class NorthwindDbContext : DbContext
    {
        public NorthwindDbContext()
        {
        }

        public NorthwindDbContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
        }

        public virtual DbSet<Product> Products { get; set; }
        public virtual DbSet<Order> Orders { get; set; }
        public virtual DbSet<Customer> Customers { get; set; }
        public virtual DbSet<Category> Categories { get; set; }
        public virtual DbSet<OrderDetail> OrderDetails { get; set; }
    }
}