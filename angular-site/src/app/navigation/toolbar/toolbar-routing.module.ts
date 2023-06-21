import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ToolbarComponent} from './toolbar.component';


const routes: Routes = [{
  path: '',
  component: ToolbarComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToolbarRoutingModule { }
