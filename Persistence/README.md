### Persistence

The persistence folder is a collection of class libraries that utilize the [Repository and Unit of Work patterns](https://docs.microsoft.com/en-us/aspnet/mvc/overview/older-versions/getting-started-with-ef-5-using-mvc-4/implementing-the-repository-and-unit-of-work-patterns-in-an-asp-net-mvc-application). In order to use them in a project, they have to be added as dependencies. 

Afterwards, in the *Startup.cs* file of the project, the AddPersistence service has to be added:

```c#
//...
public void ConfigureServices(IServiceCollection services)
{
    services.AddPersistence(Configuration);
    services.AddControllersWithViews();
}
//...
```
Finally in the controller the IUnitOfWork interface has to be injected:

```c#
//...
public class HomeController : Controller
{
    private IUnitOfWork _unitOfWork;

    public HomeController(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }
//...
```