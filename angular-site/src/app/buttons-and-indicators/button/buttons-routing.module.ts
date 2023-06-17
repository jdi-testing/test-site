import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ButtonTypesExample} from "./button-types-example";


const routes: Routes = [{
  path: '',
  component: ButtonTypesExample
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ButtonsRoutingModule { }
