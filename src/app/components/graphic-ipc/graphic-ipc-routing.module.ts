import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphicIPCComponent } from './graphic-ipc.component';

const routes: Routes = [{ path: '', component: GraphicIPCComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraphicIPCRoutingModule { }