import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SnackBarComponent} from './snack-bar.component';


const routes: Routes = [{
  path: '',
  component: SnackBarComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SnackBarRoutingModule { }
