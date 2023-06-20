import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SortOverviewExample} from './sort-overview-example';


const routes: Routes = [{
  path: '',
  component: SortOverviewExample
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SortHeaderRoutingModule { }
