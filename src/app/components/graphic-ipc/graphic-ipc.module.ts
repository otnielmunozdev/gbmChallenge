import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphicIPCRoutingModule } from './graphic-ipc-routing.module';
import { GraphicIPCComponent } from './graphic-ipc.component';
import { LoaderCModule } from 'src/app/shared/loader/loader.module';

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
  ],
})
export class GraphicIPCModule { }
