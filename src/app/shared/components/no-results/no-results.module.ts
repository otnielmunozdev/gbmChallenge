import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoResultsRoutingModule } from './no-results-routing.module';
import { NoResultsComponent } from './no-results.component';

@NgModule({
  declarations: [
    NoResultsComponent
  ],
  exports:[
    NoResultsComponent
  ],
  imports: [
    CommonModule,
    NoResultsRoutingModule,
  ],
})
export class NoResultsModule { }
