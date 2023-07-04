import {RouterModule, Routes} from '@angular/router';
import {BadgeOverviewExample} from './badge-overview-example';
import {NgModule} from '@angular/core';

const routes: Routes = [{
  path: '',
  component: BadgeOverviewExample,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BadgeRoutingModule {
}
