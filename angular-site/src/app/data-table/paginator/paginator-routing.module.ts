import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginationsComponent } from './paginations.component';


const routes: Routes = [{
  path: '',
  component: PaginationsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginatorRoutingModule { }
