import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtraInfoRoutingModule } from './extra-info-routing.module';
import { ExtraInfoComponent } from './extra-info.component';

@NgModule({
  declarations: [
    ExtraInfoComponent
  ],
  exports:[
    ExtraInfoComponent
  ],
  imports: [
    CommonModule,
    ExtraInfoRoutingModule
  ],
})
export class ExtraInfoModule { }
