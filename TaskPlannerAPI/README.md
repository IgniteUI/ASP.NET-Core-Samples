# TaskPlanner application

### Starting the Application

TaskPlannerAPI is created with **ASP.NET Core 3.0+**. It depends on the [TaskPlanner](https://github.com/IgniteUI/TaskPlanner) application as a submodule added to the `ClientApp` dir.

- Press `CTRL + F5` to run the project or press `F5` to start run it in debug mode.

 > If you get the "*The Angular CLI process did not start listening for requests within the timeout period of 0 seconds*" message, you will need to run the client app separately. Just open a new command prompt in the `ClientApp` dir and execute `npm run start`.

### Application Structure

- REST API server. The [`IssuesController`](https://github.com/IgniteUI/ASP.NET-Core-Samples/tree/master/TaskPlannerAPI/Controllers/IssuesController.cs) demonstrates how to use Octokit library to fetch issues/PRs from a GitHub repository.
- [`TaskPlanner`](https://github.com/IgniteUI/TaskPlanner) client application provides an effective means for managing projects and related tasks. Thus, it loads data from the REST API enabling the user to start managing - filtering and sorting tasks, editing tasks, adding new tasks. Built using Ignite UI for Angular, it shows nice UX UI perks like ability to Drag and Drop items from and to the List and Data Grid.

In order to use different client application, go ahead and open the .csproj file and edit the execution commands:
```xml
<Target Name="DebugEnsureNodeEnv" BeforeTargets="Build" Condition=" '$(Configuration)' == 'Debug'">
<!-- Ensure Node.js is installed -->
<Exec Command="node --version" ContinueOnError="true">
    <Output TaskParameter="ExitCode" PropertyName="ErrorCode" />
</Exec>
<Error Condition="'$(ErrorCode)' != '0'" Text="Node.js is required to build and run this project. To continue, please install Node.js from https://nodejs.org/, and then restart your command prompt or IDE." />
<Message Importance="high" Text="Custom message: SpaRoot is $(SpaRoot) and Root is $(SolutionDir)" />
<Exec Condition="!Exists('$(SpaRoot)')" WorkingDirectory="$(SolutionDir)" Command="git clone -j8 https://github.com/IgniteUI/TaskPlanner.git ClientApp "/>
<Exec Condition="Exists('$(SpaRoot)')" WorkingDirectory="$(SpaRoot)" Command="git pull origin master" />
<Message Importance="high" Text="Custom message: Restoring dependencies using 'npm'. This may take several minutes..." />
<Exec Condition="!Exists('$(SpaRoot)node_modules')" WorkingDirectory="$(SpaRoot)" Command="npm install" />
</Target>
```

The first `Exec` command is performed in order to fetch the submodule (the repository where the client app lives) if it is not already fetched
The second `Exec` command is used to pull the changes if it the remote client app is already fetched
The third `Exec` command is used to perform `npm install`

### Framework(s)

`ASP.NET Core`, `Angular`

 
### Components Used

[ButtonGroup](https://www.infragistics.com/products/ignite-ui-angular/angular/components/buttongroup.html), [Calendar](https://www.infragistics.com/products/ignite-ui-angular/angular/components/calendar.html), [Card](https://www.infragistics.com/products/ignite-ui-angular/angular/components/card.html), [DataGrid](https://www.infragistics.com/products/ignite-ui-angular/angular/components/grid/grid.html), [Dialog](https://www.infragistics.com/products/ignite-ui-angular/angular/components/dialog.html), [Divider](https://www.infragistics.com/products/ignite-ui-angular/angular/components/divider.html), [Icon](https://www.infragistics.com/products/ignite-ui-angular/angular/components/icon.html), [InputGroup](https://www.infragistics.com/products/ignite-ui-angular/angular/components/input_group.html), [List](https://www.infragistics.com/products/ignite-ui-angular/angular/components/list.html), [NavBar](https://www.infragistics.com/products/ignite-ui-angular/angular/components/navbar.html), [Switch](https://www.infragistics.com/products/ignite-ui-angular/angular/components/switch.html), [Tabs](https://www.infragistics.com/products/ignite-ui-angular/angular/components/tabs.html), [Toast](https://www.infragistics.com/products/ignite-ui-angular/angular/components/toast.html), [DragDropDirective](https://www.infragistics.com//angularsite/components/drag_drop.html)

 
### Industry

Task Manager Tooling
Project Manager Tooling
Data manipulation


### TaskPlanner Sample for ASP.NET Core  
ASP.NET Core web framework provides rich integration with Modern UI frameworks such as Angular, React, Web Components, jQuery etc. The TaskPlanner client application provides an effective means for managing projects and related tasks. Thus, it loads data from the REST API enabling the user to start managing - filtering and sorting tasks, editing tasks, adding new tasks. Built using Ignite UI for Angular, it shows nice UX UI perks like ability to Drag and Drop items from and to the List and Data Grid.
