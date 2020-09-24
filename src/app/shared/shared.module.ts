import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TableLightComponent } from './components/table-light/table-light.component';
import { SharedRoutingModule } from './shared-routing.module';



@NgModule({
  declarations: [TableLightComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    TableLightComponent,
  ]
})
export class SharedModule { }
