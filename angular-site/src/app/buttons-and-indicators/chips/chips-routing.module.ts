import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChipsOverviewExample} from "./components/chips-overview-example";
import {ChipsComponent} from "./chips.component";


const routes: Routes = [{
  path: '',
  component: ChipsComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChipsRoutingModule { }
