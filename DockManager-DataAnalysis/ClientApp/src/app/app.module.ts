import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  ConditionalFormattingDirective } from "./directives/conditional-formatting/conditional-formatting.directive";
import { FloatingPanesService} from './services/floating-panes.service';
import { ChartIntegrationDirective} from './directives/chart-integration/chart-integration.directive';
import { IgxGridModule, IgxButtonModule, IgxDialogModule, IgxDividerModule, IgxTabsModule } from 'igniteui-angular';
import { IgxDataChartComponent, IgxItemLegendComponent, IgxLegendComponent, IgxPieChartComponent, IgxDataChartCategoryModule, IgxDataChartCoreModule, IgxLegendModule, IgxDataChartInteractivityModule, IgxNumericXAxisModule, IgxNumericYAxisModule, IgxCategoryXAxisModule, IgxItemLegendModule, IgxPieChartModule, IgxDataChartStackedModule, IgxDataChartScatterModule, IgxBarSeriesModule, IgxCategoryChartModule } from 'igniteui-angular-charts';
import { NamePipe } from './pipes/name.pipe';
import { FilterTypePipe } from './pipes/filter-type.pipe';
import {DockManagerDataAnalysisComponent} from './dock-manager-data-analysis/dock-manager-data-analysis.component';
import { SelectedPipeChart } from './pipes/selected-chart.pipe';
@NgModule({
  declarations: [
    AppComponent,
    FloatingPanesService,
    ConditionalFormattingDirective,
    DockManagerDataAnalysisComponent,
    ChartIntegrationDirective,
    NamePipe,
    FilterTypePipe,
    SelectedPipeChart
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IgxButtonModule,
    IgxDialogModule,
    IgxDividerModule,
    IgxGridModule,
    IgxTabsModule,
    IgxDataChartCategoryModule,
    IgxDataChartCoreModule,
    IgxLegendModule,
    IgxDataChartInteractivityModule,
    IgxNumericXAxisModule,
    IgxNumericYAxisModule,
    IgxCategoryXAxisModule,
    IgxItemLegendModule,
    IgxPieChartModule,
    IgxDataChartStackedModule,
    IgxDividerModule,
    IgxDataChartScatterModule,
    IgxBarSeriesModule,
    IgxCategoryChartModule,

  ],
  providers: [FloatingPanesService],
  bootstrap: [AppComponent],
  entryComponents: [
    IgxDataChartComponent,
    IgxItemLegendComponent,
    IgxLegendComponent,
    IgxPieChartComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
