using System.ComponentModel.DataAnnotations.Schema;

namespace Entities.Models
{
    [Table("Category")]
    public class Category
    {
        public int Id { get; set; }
        public string CategoryName { get; set; }
        public string Description { get; set; }
    }
}