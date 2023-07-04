import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PaginatorConfigurableExample} from './paginator-configurable-example';


const routes: Routes = [{
  path: '',
  component: PaginatorConfigurableExample
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginatorRoutingModule { }
