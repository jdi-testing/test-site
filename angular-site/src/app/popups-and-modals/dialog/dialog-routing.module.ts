import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DialogOverviewExample} from './dialog-overview-example';


const routes: Routes = [{
  path: '',
  component: DialogOverviewExample,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DialogRoutingModule { }
