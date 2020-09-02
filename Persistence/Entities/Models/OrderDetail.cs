using System.ComponentModel.DataAnnotations.Schema;

namespace Entities.Models
{
    [Table("OrderDetail")]
    public class OrderDetail
    {
        public string Id { get; set; }
        public int OrderId { get; set; }
        public int ProductId { get; set; }
        public decimal UnitPrice { get; set; }
        public short Quantity { get; set; }
        public double Discount { get; set; }
    }
}