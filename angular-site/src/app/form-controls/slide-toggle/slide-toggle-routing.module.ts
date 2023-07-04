import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SlideToggleComponent} from "./slide-toggle.component";


const routes: Routes = [{
  path: '',
  component: SlideToggleComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SlideToggleRoutingModule { }
