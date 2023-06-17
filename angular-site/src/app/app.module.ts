import { NgModule } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatNativeDateModule} from '@angular/material/core';
import {BadgeModule} from './buttons-and-indicators/badge/badge.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {AppComponent} from './app.component';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {AutocompleteComponent} from "./form-controls/autocomplete/autocomplete/autocomplete.component";
import {AutocompleteModule} from "./form-controls/autocomplete/autocomplete/autocomplete.module";
import {ButtonsModule} from "./buttons-and-indicators/button/buttons.module";
import {ButtonToggleComponent} from "./buttons-and-indicators/button-toggle/button-toggle.component";
import {ButtonsToggleModule} from "./buttons-and-indicators/button-toggle/buttons-toggle.module";

// Default MatFormField appearance to 'fill' as that is the new recommended approach and the
// `legacy` and `standard` appearances are scheduled for deprecation in version 10.
// This makes the examples that use MatFormField render the same in StackBlitz as on the docs site.

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BadgeModule,
    AutocompleteModule,
    ButtonsModule,
    ButtonsToggleModule,
    MatSidenavModule,
    MatListModule
  ],
  entryComponents: [AppComponent],
  declarations: [AppComponent],
  bootstrap:  [AppComponent],
  // [RadioOverviewExample, RadioNgModelExample, CheckboxOverviewExample, CheckboxConfigurableExample, SlideToggleOverviewExample,
  //                SlideToggleConfigurableExample, AutocompleteOverviewExample, AutocompleteSimpleExample, AutocompleteDisplayExample, AutocompleteFilterExample,
  //                AutocompleteOptgroupExample, AutocompleteAutoActiveFirstOptionExample, SelectOverviewExample, SelectValueBindingExample, SelectFormExample,
  //                SelectHintErrorExample, SelectDisabledExample, SelectResetExample, SelectOptgroupExample, SelectMultipleExample, SelectCustomTriggerExample,
  //                SelectNoRippleExample, SelectPanelClassExample, InputOverviewExample, SelectErrorStateMatcherExample, InputErrorStateMatcherExample,
  //                TextFieldAutosizeTextareaExample, InputClearableExample, InputErrorsExample, InputFormExample, InputHintExample, InputPrefixSuffixExample,
  //                SliderOverviewExample, SliderFormattingExample, SliderConfigurableExample, DatepickerOverviewExample, DatepickerStartViewExample,
  //                DatepickerValueExample, DatepickerMinMaxExample, DatepickerFilterExample, DatepickerEventsExample, DatepickerDisabledExample,
  //                DatepickerTouchExample, DatepickerApiExample,
  //                FormFieldOverviewExample, FormFieldLabelExample, FormFieldAppearanceExample, FormFieldHintExample, FormFieldErrorExample,
  //                FormFieldPrefixSuffixExample, FormFieldThemingExample, FormFieldCustomControlExample, MyTelInput, MenuOverviewExample, MenuIconsExample,
  //                NestedMenuExample, ToolbarOverviewExample, ToolbarMultirowExample, SidenavOverviewExample, SidenavDrawerOverviewExample,
  //                SidenavPositionExample, SidenavOpenCloseExample, SidenavModeExample, SidenavDisableCloseExample, SidenavFixedExample, SidenavResponsiveExample,
  //                SidenavAutosizeExample, CardOverviewExample, CardFancyExample, DividerOverviewExample, ExpansionOverviewExample, ExpansionStepsExample,
  //                GridListOverviewExample, GridListDynamicExample, ListOverviewExample, ListSectionsExample, TreeDynamicExample, TreeFlatOverviewExample,
  //                TreeChecklistExample, TreeNestedOverviewExample, TreeLoadmoreExample, StepperOverviewExample, StepperOptionalExample, TabGroupBasicExample,
  //                TabGroupCustomLabelExample, TabGroupDynamicHeightExample, TabGroupDynamicExample, TabGroupHeaderBelowExample, TabGroupLazyLoadedExample,
  //                TabGroupThemeExample, TabGroupAsyncExample, TabNavBarBasicExample,
  //                ButtonTypesExample, ButtonToggleOverviewExample, ButtonToggleExclusiveExample, BadgeOverviewExample, ChipsOverviewExample,
  //                ChipsStackedExample, ChipsAutocompleteExample, ChipsInputExample, IconOverviewExample, IconSvgExample,
  //                ProgressSpinnerOverviewExample, ProgressSpinnerConfigurableExample, ProgressBarBufferExample, ProgressBarDeterminateExample,
  //                ProgressBarIndeterminateExample, ProgressBarQueryExample, ProgressBarConfigurableExample, RippleOverviewExample,
  //                BottomSheetOverviewExample, DialogOverviewExample, SnackBarOverviewExample, SnackBarComponentExample, TooltipOverviewExample,
  //                TooltipPositionExample, TooltipCustomClassExample, TooltipDelayExample, TooltipDisabledExample, TooltipMessageExample, TooltipManualExample,
  //                TooltipModifiedDefaultsExample, TooltipAutoHideExample,
  //                PaginatorConfigurableExample, SortOverviewExample, TableBasicExample, TableBasicFlexExample, TableDynamicColumnsExample,
  //                TableExpandableRowsExample, TableFilteringExample, TableFooterRowExample, TableHttpExample, TableSelectionExample,
  //                TableMultipleHeaderFooterExample, TableOverviewExample, TableStickyColumnsExample, TablePaginationExample, TableRowContextExample,
  //                TableStickyHeaderExample, TableStickyFooterExample, TableReorderableExample, TableSortingExample,
  //                DatepickerLocaleExample, DatepickerMomentExample, DatepickerFormatsExample],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ]
})
export class AppModule {}
