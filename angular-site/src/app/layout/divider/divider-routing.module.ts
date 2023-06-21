import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DividerOverviewExample} from './divider-overview-example';


const routes: Routes = [{
  path: '',
  component: DividerOverviewExample,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DividerRoutingModule { }
