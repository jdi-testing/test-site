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
      },
      {
        path: RoutingUrls.Slider,
        loadChildren: () =>
          import('./form-controls/slider/slider.module')
            .then((m) => m.SliderModule)
      },
      {
        path: RoutingUrls.Card,
        loadChildren: () =>
          import('./layout/card/card.module')
            .then((m) => m.CardModule)
      },
      {
        path: RoutingUrls.Divider,
        loadChildren: () =>
          import('./layout/divider/divider.module')
            .then((m) => m.DividerModule)
      },
      {
        path: RoutingUrls.Panel,
        loadChildren: () =>
          import('./layout/expansion-panel/panel.module')
            .then((m) => m.PanelModule)
      },
      {
        path: RoutingUrls.GridList,
        loadChildren: () =>
          import('./layout/grid-list/grid-list.module')
            .then((m) => m.GridListModule)
      },
      {
        path: RoutingUrls.List,
        loadChildren: () =>
          import('./layout/list/list.module')
            .then((m) => m.ListModule)
      },
      {
        path: RoutingUrls.Stepper,
        loadChildren: () =>
          import('./layout/stepper/stepper.module')
            .then((m) => m.StepperModule)
      },
      {
        path: RoutingUrls.Tab,
        loadChildren: () =>
          import('./layout/tab/tab.module')
            .then((m) => m.TabModule)
      },
      {
        path: RoutingUrls.Tree,
        loadChildren: () =>
          import('./layout/tree/tree.module')
            .then((m) => m.TreeModule)
      },
      {
        path: RoutingUrls.Input,
        loadChildren: () =>
          import('./form-controls/input/inputs.module')
            .then((m) => m.InputsModule)
      },
      {
        path: RoutingUrls.RadioButton,
        loadChildren: () =>
          import('./form-controls/radio-button/radio-buttons.module')
            .then((m) => m.RadioButtonsModule)
      },
      {
        path: RoutingUrls.Menu,
        loadChildren: () =>
          import('./navigation/menu/menu.module')
            .then((m) => m.MenuModule)
      },
      {
        path: RoutingUrls.ToolBar,
        loadChildren: () =>
          import('./navigation/toolbar/toolbar.module')
            .then((m) => m.ToolbarModule)
      },
      {
        path: RoutingUrls.SideNav,
        loadChildren: () =>
          import('./navigation/sidenav/sidenav.module')
            .then((m) => m.SidenavModule)
      },
      {
        path: RoutingUrls.BottomSheet,
        loadChildren: () =>
          import('./popups-and-modals/bottom-sheet/bottom-sheet.module')
            .then((m) => m.BottomSheetModule)
      },
      {
        path: RoutingUrls.Dialog,
        loadChildren: () =>
          import('./popups-and-modals/dialog/dialog.module')
            .then((m) => m.DialogModule)
      },
      {
        path: RoutingUrls.SnackBar,
        loadChildren: () =>
          import('./popups-and-modals/snackbar/snack-bar.module')
            .then((m) => m.SnackBarModule)
      },
      {
        path: RoutingUrls.Tooltip,
        loadChildren: () =>
          import('./popups-and-modals/tooltip/tooltip.module')
            .then((m) => m.TooltipModule)
      },
    ]
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
