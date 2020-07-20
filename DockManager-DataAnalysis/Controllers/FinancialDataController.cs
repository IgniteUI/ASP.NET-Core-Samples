using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;

namespace DockManager_DataAnalysis.Controllers
{
    [ApiController]
    [Route("financialData/{volume}")]
    public class FinancialDataController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<FinancialRecord> Get(int volume)
        {
            return Enumerable.Range(1, volume).Select(index => new FinancialRecord()).ToArray();
        }
    }
}
