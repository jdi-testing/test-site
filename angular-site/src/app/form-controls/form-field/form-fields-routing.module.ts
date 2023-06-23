import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormFieldsComponent} from './form-fields.component';


const routes: Routes = [{
  path: '',
  component: FormFieldsComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormFieldsRoutingModule { }
