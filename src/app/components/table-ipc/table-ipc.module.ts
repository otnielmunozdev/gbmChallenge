import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableIPCRoutingModule } from './table-ipc-routing.module';
import { TableIPCComponent } from './table-ipc.component';
import { LoaderCModule } from 'src/app/shared/components/loader/loader.module';
import { DataTablesModule } from 'angular-datatables';
import { NoResultsModule } from 'src/app/shared/components/no-results/no-results.module';

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
    LoaderCModule,
    DataTablesModule,
    NoResultsModule
  ],
})
export class TableIPCModule { }
