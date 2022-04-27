import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableIPCComponent } from './table-ipc.component';

const routes: Routes = [{ path: '', component: TableIPCComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableIPCRoutingModule { }