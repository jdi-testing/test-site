import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RippleOverviewExample} from './ripple-overview-example';


const routes: Routes = [{
  path: '',
  component: RippleOverviewExample,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RippleRoutingModule { }
