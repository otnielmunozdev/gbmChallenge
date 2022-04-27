import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableIPCRoutingModule } from './table-ipc-routing.module';
import { TableIPCComponent } from './table-ipc.component';
import { LoaderCModule } from 'src/app/shared/loader/loader.module';

@NgModule({
  declarations: [
    TableIPCComponent
  ],
  exports:[
    TableIPCComponent
  ],
  imports: [
    CommonModule,
    TableIPCRoutingModule,
    LoaderCModule
  ],
})
export class TableIPCModule { }
