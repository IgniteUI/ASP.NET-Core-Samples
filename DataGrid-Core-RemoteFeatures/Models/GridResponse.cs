using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DataGrid_Core_RemoteFeatures.Models
{
    public class GridResponse
    {
        public bool Success { get; set; }
        public List<KeyValuePair<string,string>> AddedRows { get; set; }
    }
}
