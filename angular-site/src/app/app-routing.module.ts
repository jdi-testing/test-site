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
