import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphicIPCRoutingModule } from './graphic-ipc-routing.module';
import { GraphicIPCComponent } from './graphic-ipc.component';
import { LoaderCModule } from 'src/app/shared/components/loader/loader.module';
import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';
import { NoResultsModule } from 'src/app/shared/components/no-results/no-results.module';

PlotlyModule.plotlyjs = PlotlyJS;
@NgModule({
  declarations: [
    GraphicIPCComponent
  ],
  exports:[
    GraphicIPCComponent
  ],
  imports: [
    CommonModule,
    GraphicIPCRoutingModule,
    LoaderCModule,
    PlotlyModule,
    NoResultsModule
  ],
})
export class GraphicIPCModule { }
