# Dock Manager with Data Analysis

### Starting the Application

- Build the DockManager-DataAnalysis project
- Set the DockManager-DataAnalysis project as Startup project
- Press `CTRL + F5` to run the project or press `F5` to start run it in debug mode.
> DockManager-DataAnalysis is created with **ASP.NET Core 3.0+** and uses [SpaServices](https://www.nuget.org/packages/Microsoft.AspNetCore.SpaServices) to build and run the [ClientApp](https://github.com/IgniteUI/DockManager-DataAnalysis) submodule application. Since the client application uses [Angular version 10](https://v10.angular.io/docs), a **TimeoutException** with the message "*The Angular CLI process did not start listening for requests within the timeout period of 0 seconds*" may occur during the starting process in a relation to this [issue](https://github.com/dotnet/aspnetcore/issues/17277). To workaround this behavior run the **ClientApp** project separately.

### Application Structure

- **REST API** server, configured with a [**FinancialDataController**](https://github.com/IgniteUI/ASP.NET-Core-Samples/tree/master/DockManager-DataAnalysis/Controllers/FinancialDataController.cs) on route `financialData/{volume}`, where the `{volume}` parameter is the amount of [**FinancialDataRecord**](https://github.com/IgniteUI/ASP.NET-Core-Samples/tree/master/DockManager-DataAnalysis/FinancialDataRecord.cs) objects, which the server will return as a collection.
- Client application, mimicking the behavior of the [Data Analysis with DockManager](https://www.infragistics.com/products/ignite-ui-angular/angular/components/general/framework-and-features/data-analysis.html#data-analysis-with-dockmanager) sample application.

In order to use different client application, go ahead and open the .csproj file and edit the execution commands:
```xml
<Target Name="DebugEnsureNodeEnv" BeforeTargets="Build" Condition=" '$(Configuration)' == 'Debug'">
<!-- Ensure Node.js is installed -->
<Exec Command="node --version" ContinueOnError="true">
    <Output TaskParameter="ExitCode" PropertyName="ErrorCode" />
</Exec>
<Error Condition="'$(ErrorCode)' != '0'" Text="Node.js is required to build and run this project. To continue, please install Node.js from https://nodejs.org/, and then restart your command prompt or IDE." />
<Message Importance="high" Text="Custom message: SpaRoot is $(SpaRoot) and Root is $(SolutionDir)" />
<Exec Condition="!Exists('$(SpaRoot)')" WorkingDirectory="$(SolutionDir)" Command="git clone -j8 https://github.com/IgniteUI/DockManager-DataAnalysis.git ClientApp "/>
<Exec Condition="Exists('$(SpaRoot)')" WorkingDirectory="$(SpaRoot)" Command="git pull origin master" />
<Message Importance="high" Text="Custom message: Restoring dependencies using 'npm'. This may take several minutes..." />
<Exec Condition="!Exists('$(SpaRoot)node_modules')" WorkingDirectory="$(SpaRoot)" Command="npm install" />
</Target>
```

The first `Exec` command is performed in order to fetch the submodule if it is not already fetched
The second `Exec` command is used to pull the changes if it the remote client app is already fetched
The third `Exec` command is used to perform `npm install`