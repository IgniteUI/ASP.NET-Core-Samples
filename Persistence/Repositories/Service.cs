using Entities;
using Interfaces;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.IO;

namespace Repositories
{
    public static class Service
    {
        public static IServiceCollection AddPersistence(this IServiceCollection services, IConfiguration configuration)
        {
            var solutionRootPath = AppContext.BaseDirectory.Substring(0, AppContext.BaseDirectory.LastIndexOf("\\bin"));
            solutionRootPath = solutionRootPath.Substring(0, solutionRootPath.LastIndexOf("\\") + 1);

            string SqlitePath = Path.Combine(solutionRootPath + "\\Persistence\\Repositories\\Data\\northwind.sqlite");

            services.AddDbContext<NorthwindDbContext>(options =>
              options.UseSqlite("Data Source=" + SqlitePath), ServiceLifetime.Scoped
          );

            services.AddScoped<IUnitOfWork, UnitOfWork>();

            return services;
        }
    }
}