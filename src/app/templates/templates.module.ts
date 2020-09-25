import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TemplateAComponent } from './components/template-a/template-a.component';
import { TemplateBComponent } from './components/template-b/template-b.component';
import { TemplatesRoutingModule } from './templates-routing.module';



@NgModule({
  declarations: [TemplateAComponent, TemplateBComponent],
  imports: [
    CommonModule,
    TemplatesRoutingModule,
    SharedModule,
  ],
  exports: [
    TemplateAComponent,
    TemplateBComponent
  ]
})
export class TemplatesModule { }
