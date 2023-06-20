import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RoutingUrls} from './routing-urls.enum';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: RoutingUrls.Badges,
        loadChildren: () =>
          import('./buttons-and-indicators/badge/badges.module')
            .then((m) => m.BadgesModule)
      },
      {
        path: RoutingUrls.Buttons,
        loadChildren: () =>
          import('./buttons-and-indicators/button/buttons.module')
            .then((m) => m.ButtonsModule)
      },
      {
        path: RoutingUrls.ButtonsToggle,
        loadChildren: () =>
          import('./buttons-and-indicators/button-toggle/button-toggle.module')
            .then((m) => m.ButtonToggleModule)
      },
      {
        path: RoutingUrls.Chips,
        loadChildren: () =>
          import('./buttons-and-indicators/chips/chips.module')
            .then((m) => m.ChipsModule)
      },
      {
        path: RoutingUrls.Icons,
        loadChildren: () =>
          import('./buttons-and-indicators/icon/icons.module')
            .then((m) => m.IconsModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
