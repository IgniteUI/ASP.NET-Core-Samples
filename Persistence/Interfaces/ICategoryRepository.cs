using Entities.Models;
using Entities.Queries;
using Interfaces.Repositories;
using System.Collections.Generic;

namespace Interfaces
{
    public interface ICategoryRepository : IRepository<Category>
    {
        IEnumerable<UnitsSoldByCategoryAndSpecificCountries> GetSpecificCountries();

        IEnumerable<UnitsSoldByMonthForSpecificCountries> GetUnitsSoldByMonthForSpecificCountries();
    }
}