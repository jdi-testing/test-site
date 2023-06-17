import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RoutingUrls} from "./routing-urls.enum";


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: RoutingUrls.Badges,
        loadChildren: () =>
          import('./buttons-and-indicators/badge/badge.module')
            .then(m => m.BadgeModule)
      },
      // {
      //   path: RoutingUrls.Autocompletes,
      //   loadChildren: () =>
      //     import('./form-controls/autocomplete/autocomplete/autocomplete.module')
      //       .then(m => m.AutocompleteModule)
      // },
      {
        path: RoutingUrls.Buttons,
        loadChildren: () =>
          import('./buttons-and-indicators/button/buttons.module')
            .then(m => m.ButtonsModule)
      },
      {
        path: RoutingUrls.ButtonsToggle,
        loadChildren: () =>
          import('./buttons-and-indicators/button-toggle/buttons-toggle.module')
            .then(m => m.ButtonsToggleModule)
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
