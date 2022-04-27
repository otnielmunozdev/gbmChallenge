import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ExtraInfoModule } from '../extra-info/extra-info.module';
import { TableIPCModule } from '../table-ipc/table-ipc.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ExtraInfoModule,
    TableIPCModule
  ],
})
export class HomeModule { }