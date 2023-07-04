import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BottomSheetOverviewExample} from './bottom-sheet-overview-example';


const routes: Routes = [{
  path: '',
  component: BottomSheetOverviewExample,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BottomSheetRoutingModule { }
