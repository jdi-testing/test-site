import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProgressBarComponent} from './progress-bar.component';


const routes: Routes = [{
  path: '',
  component: ProgressBarComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgressBarRoutingModule { }
