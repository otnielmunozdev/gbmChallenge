import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphicIPCRoutingModule } from './graphic-ipc-routing.module';
import { GraphicIPCComponent } from './graphic-ipc.component';
import { LoaderCModule } from 'src/app/shared/loader/loader.module';
import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';

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
    PlotlyModule
  ],
})
export class GraphicIPCModule { }
