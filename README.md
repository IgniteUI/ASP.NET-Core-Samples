The repository consists of samples using the [Ignite UI For Javascript](https://www.infragistics.com/products/ignite-ui) library in a context of ASP.NET Core Web Application.

This repository consists of different ASP.NET Core applications. The idea is to demonstrate examples of real world scenarios, and how easy is the integration between the server and a web application, built using any modern UI framework such as `Angular`, `React`, `Web Components`, `jQuery`, etc.

Each ASP.NET Core application refers a client application built using any of Ignite UI frameworks - [`Ignite UI for Angular`](https://www.infragistics.com/products/ignite-ui-angular), [`Ignite UI for jQuery`](https://www.infragistics.com/products/ignite-ui-jquery), [`Ignite UI for React`](https://www.infragistics.com/products/ignite-ui-react), [`Ignite UI for Web Components`](https://www.infragistics.com/products/ignite-ui-web-components).

The examples in this repository have the server and client parts configured to run together - the server application refers the client in the `ClientApp` dir by a submodule. However, each application has its own purpose and is agnostic to the other part, meaning that they are easily replaceable.

For example, you as a developer may create a client application to consume the same endpoint. In order to use different client application, open the .csproj file and edit the URL of repository, where the client application lives:
```xml
<Target Name="DebugEnsureNodeEnv" BeforeTargets="Build" Condition=" '$(Configuration)' == 'Debug'">
    <Exec Condition="!Exists('$(SpaRoot)')" WorkingDirectory="$(SolutionDir)" Command="git clone -j8 https://github.com/IgniteUI/TaskPlanner.git ClientApp "/>
    <Exec Condition="Exists('$(SpaRoot)')" WorkingDirectory="$(SpaRoot)" Command="git pull origin master" />
    <Exec Condition="!Exists('$(SpaRoot)node_modules')" WorkingDirectory="$(SpaRoot)" Command="npm install" />
</Target>
```

The `Exec` commands are needed to: 
1) Clone the client app repository
2) Pull changes
3) Execute `npm install`


### Applications

* [Scheduler CRUD operations](https://github.com/IgniteUI/ASP.NET-Core-Samples/tree/master/Scheduler-Core-CRUD) - The sample demonstrates how the user could execute and perform CRUD operations with [Scheduler](https://www.igniteui.com/scheduler/overview) component.
* [Dock Manager with Data Analysis](https://github.com/IgniteUI/ASP.NET-Core-Samples/tree/master/DockManager-DataAnalysis#dock-manager-with-data-analysis) - The sample demonstrates how the user can analyse selected data from a [data grid](https://www.infragistics.com/products/ignite-ui-angular/angular/components/grid/grid.html) component through a [data chart](https://www.infragistics.com/products/ignite-ui-angular/angular/components/data-chart.html) representation or [conditional cell formatting](https://www.infragistics.com/products/ignite-ui-angular/angular/components/general/framework-and-features/data-analysis.html#conditional-cell-formatting).
For more information check out the [README.md](https://github.com/IgniteUI/ASP.NET-Core-Samples/tree/master/DockManager-DataAnalysis#dock-manager-with-data-analysis) file.
* [Marketing Dashboard](https://github.com/IgniteUI/ASP.NET-Core-Samples/tree/master/MarketingDashboard) - 
The **Angular Marketing Dashboard** application makes use of the [Ignite UI for Angular](https://www.infragistics.com/products/ignite-ui-angular/angular/components/general/getting_started.html) [data chart](https://www.infragistics.com/products/ignite-ui-angular/angular/components/datachart.html), [map](https://www.infragistics.com/products/ignite-ui-angular/angular/components/map_overview.html), [doughnut chart](https://www.infragistics.com/products/ignite-ui-angular/angular/components/doughnutchart.html), [bullet graph](https://www.infragistics.com/products/ignite-ui-angular/angular/components/bulletgraph.html), [date picker](https://www.infragistics.com/products/ignite-ui-angular/angular/components/date_picker.html), [list](https://www.infragistics.com/products/ignite-ui-angular/angular/components/list.html), [dialog](https://www.infragistics.com/products/ignite-ui-angular/angular/components/dialog.html) and [card](https://www.infragistics.com/products/ignite-ui-angular/angular/components/card.html) controls, styled with **Ignite UI for Angular** [theming engine](https://www.infragistics.com/products/ignite-ui-angular/angular/components/themes/index.html) to tackle specific analytical challenges. The dashboard view brings together different data points a marketing expert would want to track like sessions, conversions and conversion costs.
* [Task Planner API Application](https://github.com/IgniteUI/ASP.NET-Core-Samples/tree/master/TaskPlannerAPI) - The sample demonstrates how to use the [Github API](https://octokit.github.io/rest.js/v18) with [Octo Kit](https://octokit.github.io/rest.js/v18) in order to load Ignite UI for Angular Issues and Pull requests into different visual elements like List and Grid. This app can be used to easily track our work and tasks progress.

### Adding new application

When adding new application

1. Use this template for the application [`README`](https://github.com/IgniteUI/ASP.NET-Core-Samples/wiki/Template-for-application-README-file.) file.
2. Update the list with applications above.


### Useful links
- [Create web APIs with ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/web-api/?view=aspnetcore-3.1)
- [Use the Angular project template with ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/client-side/spa/angular?view=aspnetcore-3.1&tabs=visual-studio)
- [Use the React project template with ASP.NET Core](hhttps://docs.microsoft.com/en-us/aspnet/core/client-side/spa/react?view=aspnetcore-3.1&tabs=visual-studio)
- [Enable Cross-Origin Requests (CORS) in ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/security/cors?view=aspnetcore-3.1)