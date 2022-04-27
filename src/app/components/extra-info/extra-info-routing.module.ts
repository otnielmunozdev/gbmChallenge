import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtraInfoComponent } from './extra-info.component';

const routes: Routes = [{ path: '', component: ExtraInfoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExtraInfoRoutingModule { }