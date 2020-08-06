# Dock Manager with Data Analysis

### Starting the Application

- Build the DockManager-DataAnalysis project
- Set the DockManager-DataAnalysis project as Startup project
- Press `CTRL + F5` to run the project or press `F5` to start run it in debug mode.
> DockManager-DataAnalysis is created with **ASP.NET Core 3.0+** and uses [SpaServices](https://www.nuget.org/packages/Microsoft.AspNetCore.SpaServices) to build and run the [ClientApp](https://github.com/IgniteUI/DockManager-DataAnalysis) submodule application. Since the client application uses [Angular version 10](https://v10.angular.io/docs), a **TimeoutException** with the message "*The Angular CLI process did not start listening for requests within the timeout period of 0 seconds*" may occur during the starting process in a relation to this [issue](https://github.com/dotnet/aspnetcore/issues/17277). To workaround this behavior run the **ClientApp** project separately.

### Application Structure

- **REST API** server, configured with a [**FinancialDataController**](https://github.com/IgniteUI/ASP.NET-Core-Samples/tree/master/DockManager-DataAnalysis/Controllers/FinancialDataController.cs) on route `financialData/{volume}`, where the `{volume}` parameter is the amount of [**FinancialDataRecord**](https://github.com/IgniteUI/ASP.NET-Core-Samples/tree/master/DockManager-DataAnalysis/FinancialDataRecord.cs) objects, which the server will return as a collection.
- Client application, mimicking the behavior of the [Data Analysis with DockManager](https://www.infragistics.com/products/ignite-ui-angular/angular/components/general/framework-and-features/data-analysis.html#data-analysis-with-dockmanager) sample application.