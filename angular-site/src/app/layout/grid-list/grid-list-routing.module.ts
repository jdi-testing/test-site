import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GridListComponent} from './grid-list.component';


const routes: Routes = [{
  path: '',
  component: GridListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GridListRoutingModule { }
