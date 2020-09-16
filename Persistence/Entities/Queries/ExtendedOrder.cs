using System;

namespace Entities.Queries
{
    public class ExtendedOrder
    {
        public int OrderID { get; set; }
        public string OrderDetailsID { get; set; }
        public int ProductID { get; set; }
        public int CategoryID { get; set; }
        public string ProductName { get; set; }
        public string CategoryName { get; set; }
        public string ShipCountry { get; set; }
        public short Quantity { get; set; }
        public DateTime? RequiredDate { get; set; }
        public double Discount { get; set; }
        public bool isProductDiscontinued { get; set; }
    }
}