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
      },
      {
        path: RoutingUrls.ProgressBar,
        loadChildren: () =>
          import('./buttons-and-indicators/progress-bar/progress-bar.module')
            .then((m) => m.ProgressBarModule)
      },
      {
        path: RoutingUrls.ProgressSpinner,
        loadChildren: () =>
          import('./buttons-and-indicators/progress-spinner/progress-spinner.module')
            .then((m) => m.ProgressSpinnerModule)
      },
      {
        path: RoutingUrls.Ripple,
        loadChildren: () =>
          import('./buttons-and-indicators/ripples/ripple.module')
            .then((m) => m.RippleModule)
      },
      {
        path: RoutingUrls.Paginator,
        loadChildren: () =>
          import('./data-table/paginator/paginator.module')
            .then((m) => m.PaginatorModule)
      },
      {
        path: RoutingUrls.SortHeader,
        loadChildren: () =>
          import('./data-table/sort-header/sort-header.module')
            .then((m) => m.SortHeaderModule)
      },
      {
        path: RoutingUrls.Tables,
        loadChildren: () =>
          import('./data-table/table/tables.module')
            .then((m) => m.TablesModule)
      },
      {
        path: RoutingUrls.Autocompletes,
        loadChildren: () =>
          import('./form-controls/autocomplete/autocomplete.module')
            .then((m) => m.AutocompleteModule)
      },
      {
        path: RoutingUrls.Checkbox,
        loadChildren: () =>
          import('./form-controls/checkbox/checkbox.module')
            .then((m) => m.CheckboxModule)
      },
      {
        path: RoutingUrls.Datepicker,
        loadChildren: () =>
          import('./form-controls/datepicker/datepicker.module')
            .then((m) => m.DatepickerModule)
      },
      {
        path: RoutingUrls.FormField,
        loadChildren: () =>
          import('./form-controls/form-field/form-fields.module')
            .then((m) => m.FormFieldsModule)
      },
      {
        path: RoutingUrls.Select,
        loadChildren: () =>
          import('./form-controls/select/selects.module')
            .then((m) => m.SelectsModule)
      },
      {
        path: RoutingUrls.SlideToggle,
        loadChildren: () =>
          import('./form-controls/slide-toggle/slide-toggle.module')
            .then((m) => m.SlideToggleModule)
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
