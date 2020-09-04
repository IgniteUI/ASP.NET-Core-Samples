### TaskPlanner Sample for ASP.NET Core  

The `TaskPlanner` is a RESTful API application, consisting of a server, built on `ASP.NET Core` and a client web application, built on `Angular`. This model allows for easy integration between the server and any modern UI frameworks such as `Angular`, `React`, `Web Components`, `jQuery`, etc.

While the `TaskPlanner` server and client parts are configured to run together, each application has its own purpose and is agnostic to the other part, meaning that they are easily replaceable.

### Starting the Application

- Press `CTRL + F5` to run the project or press `F5` to run it in debug mode.

 > If you get the "*The Angular CLI process did not start listening for requests within the timeout period of 0 seconds*" message, you will need to run the client app separately. Just open a new command prompt in the `ClientApp` dir and execute `npm run start`.

### Application Structure

- The `TaskPlannerAPI` is a basic Web API created with `ASP.NET Core` 3.0+. It has logic for fetching, manipulating and serving the data in an appropriate format. It also demonstrates how to use [`Octokit`](https://octokitnet.readthedocs.io/en/latest/) library to fetch issues/PRs from a GitHub repository.

- The [TaskPlanner](https://github.com/IgniteUI/TaskPlanner) client is an Angular web application. It provides an effective means for managing projects and related tasks. Thus, it loads data from the Web API endpoint, enabling the user to start managing - filtering and sorting tasks, editing tasks, adding new tasks. Built using Ignite UI for Angular, it shows nice UX UI perks like ability to Drag and Drop items from and to the List and Data Grid.

The server application refers the client in the `ClientApp` dir by a submodule. This enables the two to run together, while making it easy to change either part. For example, you as a developer may create a client application on React in order to consume the same endpoint.

In order to use different client application, open the .csproj file and edit the URL of repository, where the client application lives:
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

### Framework(s)

- `Ignite UI for Angular`
- `Angular`
- `ASP.NET Core`

 
### Components Used

[ButtonGroup](https://www.infragistics.com/products/ignite-ui-angular/angular/components/buttongroup.html), [Calendar](https://www.infragistics.com/products/ignite-ui-angular/angular/components/calendar.html), [Card](https://www.infragistics.com/products/ignite-ui-angular/angular/components/card.html), [DataGrid](https://www.infragistics.com/products/ignite-ui-angular/angular/components/grid/grid.html), [Dialog](https://www.infragistics.com/products/ignite-ui-angular/angular/components/dialog.html), [Divider](https://www.infragistics.com/products/ignite-ui-angular/angular/components/divider.html), [Icon](https://www.infragistics.com/products/ignite-ui-angular/angular/components/icon.html), [InputGroup](https://www.infragistics.com/products/ignite-ui-angular/angular/components/input_group.html), [List](https://www.infragistics.com/products/ignite-ui-angular/angular/components/list.html), [NavBar](https://www.infragistics.com/products/ignite-ui-angular/angular/components/navbar.html), [Switch](https://www.infragistics.com/products/ignite-ui-angular/angular/components/switch.html), [Tabs](https://www.infragistics.com/products/ignite-ui-angular/angular/components/tabs.html), [Toast](https://www.infragistics.com/products/ignite-ui-angular/angular/components/toast.html), [DragDropDirective](https://www.infragistics.com//angularsite/components/drag_drop.html)

 
### Industry

- Task Manager Tooling
- Project Manager Tooling
- Data manipulation
