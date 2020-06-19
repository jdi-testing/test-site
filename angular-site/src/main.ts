import './polyfills';

import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './app/material-module';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';

import {RadioOverviewExample} from './app/form-controls/radio-button/radio-overview-example';
import {RadioNgModelExample} from './app/form-controls/radio-button/radio-ng-model-example';
import {CheckboxOverviewExample} from './app/form-controls/checkbox/checkbox-overview-example';
import {CheckboxConfigurableExample} from './app/form-controls/checkbox/checkbox-configurable-example';
import {SlideToggleOverviewExample} from './app/form-controls/slide-toggle/slide-toggle-overview-example';
import {SlideToggleConfigurableExample} from './app/form-controls/slide-toggle/slide-toggle-configurable-example';
import {AutocompleteOverviewExample} from './app/form-controls/autocomplete/autocomplete-overview-example';
import {AutocompleteSimpleExample} from './app/form-controls/autocomplete/autocomplete-simple-example';
import {AutocompleteDisplayExample} from './app/form-controls/autocomplete/autocomplete-display-example';
import {AutocompleteFilterExample} from './app/form-controls/autocomplete/autocomplete-filter-example';
import {AutocompleteOptgroupExample} from './app/form-controls/autocomplete/autocomplete-optgroup-example';
import {AutocompleteAutoActiveFirstOptionExample} from './app/form-controls/autocomplete/autocomplete-auto-active-first-option-example';
import {SelectOverviewExample} from './app/form-controls/select/select-overview-example';
import {SelectValueBindingExample} from './app/form-controls/select/select-value-binding-example';
import {SelectFormExample} from './app/form-controls/select/select-form-example';
import {SelectHintErrorExample} from './app/form-controls/select/select-hint-error-example';
import {SelectDisabledExample} from './app/form-controls/select/select-disabled-example';
import {SelectResetExample} from './app/form-controls/select/select-reset-example';
import {SelectOptgroupExample} from './app/form-controls/select/select-optgroup-example';
import {SelectMultipleExample} from './app/form-controls/select/select-multiple-example';
import {SelectCustomTriggerExample} from './app/form-controls/select/select-custom-trigger-example';
import {SelectNoRippleExample} from './app/form-controls/select/select-no-ripple-example';
import {SelectPanelClassExample} from './app/form-controls/select/select-panel-class-example';
import {SelectErrorStateMatcherExample} from './app/form-controls/select/select-error-state-matcher-example';
import {InputOverviewExample} from './app/form-controls/input/input-overview-example';
import {InputErrorStateMatcherExample} from './app/form-controls/input/input-error-state-matcher-example';
import {TextFieldAutosizeTextareaExample} from './app/form-controls/input/text-field-autosize-textarea-example';
import {InputClearableExample} from './app/form-controls/input/input-clearable-example';
import {InputErrorsExample} from './app/form-controls/input/input-errors-example';
import {InputFormExample} from './app/form-controls/input/input-form-example';
import {InputHintExample} from './app/form-controls/input/input-hint-example';
import {InputPrefixSuffixExample} from './app/form-controls/input/input-prefix-suffix-example';
import {SliderOverviewExample} from './app/form-controls/slider/slider-overview-example';
import {SliderFormattingExample} from './app/form-controls/slider/slider-formatting-example';
import {SliderConfigurableExample} from './app/form-controls/slider/slider-configurable-example';
import {DatepickerOverviewExample} from './app/form-controls/datepicker/datepicker-overview-example';
import {DatepickerStartViewExample} from './app/form-controls/datepicker/datepicker-start-view-example';
import {DatepickerValueExample} from './app/form-controls/datepicker/datepicker-value-example';
import {DatepickerMinMaxExample} from './app/form-controls/datepicker/datepicker-min-max-example';
import {DatepickerFilterExample} from './app/form-controls/datepicker/datepicker-filter-example';
import {DatepickerEventsExample} from './app/form-controls/datepicker/datepicker-events-example';
import {DatepickerDisabledExample} from './app/form-controls/datepicker/datepicker-disabled-example';
import {DatepickerTouchExample} from './app/form-controls/datepicker/datepicker-touch-example';
import {DatepickerApiExample} from './app/form-controls/datepicker/datepicker-api-example';
import {DatepickerLocaleExample} from './app/form-controls/datepicker/datepicker-locale-example';
import {DatepickerMomentExample} from './app/form-controls/datepicker/datepicker-moment-example';
import {DatepickerFormatsExample} from './app/form-controls/datepicker/datepicker-formats-example';
import {FormFieldOverviewExample} from './app/form-controls/form-field/form-field-overview-example';
import {FormFieldLabelExample} from './app/form-controls/form-field/form-field-label-example';
import {FormFieldAppearanceExample} from './app/form-controls/form-field/form-field-appearance-example';
import {FormFieldHintExample} from './app/form-controls/form-field/form-field-hint-example';
import {FormFieldErrorExample} from './app/form-controls/form-field/form-field-error-example';
import {FormFieldPrefixSuffixExample} from './app/form-controls/form-field/form-field-prefix-suffix-example';
import {FormFieldThemingExample} from './app/form-controls/form-field/form-field-theming-example';
import {FormFieldCustomControlExample, MyTelInput} from './app/form-controls/form-field/form-field-custom-control-example';
import {MenuOverviewExample} from './app/navigation/menu/menu-overview-example';
import {MenuIconsExample} from './app/navigation/menu/menu-icons-example';
import {NestedMenuExample} from './app/navigation/menu/nested-menu-example';
import {ToolbarOverviewExample} from './app/navigation/toolbar/toolbar-overview-example';
import {ToolbarMultirowExample} from './app/navigation/toolbar/toolbar-multirow-example';
import {SidenavOverviewExample} from './app/navigation/sidenav/sidenav-overview-example';
import {SidenavDrawerOverviewExample} from './app/navigation/sidenav/sidenav-drawer-overview-example';
import {SidenavPositionExample} from './app/navigation/sidenav/sidenav-position-example';
import {SidenavOpenCloseExample} from './app/navigation/sidenav/sidenav-open-close-example';
import {SidenavModeExample} from './app/navigation/sidenav/sidenav-mode-example';
import {SidenavDisableCloseExample} from './app/navigation/sidenav/sidenav-disable-close-example';
import {SidenavAutosizeExample} from './app/navigation/sidenav/sidenav-autosize-example';
import {SidenavFixedExample} from './app/navigation/sidenav/sidenav-fixed-example';
import {SidenavResponsiveExample} from './app/navigation/sidenav/sidenav-responsive-example';
import {CardOverviewExample} from './app/layout/card/card-overview-example';
import {CardFancyExample} from './app/layout/card/card-fancy-example';
import {DividerOverviewExample} from './app/layout/divider/divider-overview-example';
import {ExpansionOverviewExample} from './app/layout/expansion-panel/expansion-overview-example';
import {ExpansionStepsExample} from './app/layout/expansion-panel/expansion-steps-example';
import {GridListOverviewExample} from './app/layout/grid-list/grid-list-overview-example';
import {GridListDynamicExample} from './app/layout/grid-list/grid-list-dynamic-example';
import {ListOverviewExample} from './app/layout/list/list-overview-example';
import {ListSectionsExample} from './app/layout/list/list-sections-example';
import {TreeDynamicExample} from './app/layout/tree/tree-dynamic-example';
import {TreeFlatOverviewExample} from './app/layout/tree/tree-flat-overview-example';
import {TreeChecklistExample} from './app/layout/tree/tree-checklist-example';
import {TreeNestedOverviewExample} from './app/layout/tree/tree-nested-overview-example';
import {TreeLoadmoreExample} from './app/layout/tree/tree-loadmore-example';
import {StepperOverviewExample} from './app/layout/stepper/stepper-overview-example';
import {StepperOptionalExample} from './app/layout/stepper/stepper-optional-example';
import {TabGroupBasicExample} from './app/layout/tab/tab-group-basic-example';
import {TabGroupCustomLabelExample} from './app/layout/tab/tab-group-custom-label-example';
import {TabGroupDynamicHeightExample} from './app/layout/tab/tab-group-dynamic-height-example';
import {TabGroupDynamicExample} from './app/layout/tab/tab-group-dynamic-example';
import {TabGroupHeaderBelowExample} from './app/layout/tab/tab-group-header-below-example';
import {TabGroupLazyLoadedExample} from './app/layout/tab/tab-group-lazy-loaded-example';
import {TabGroupThemeExample} from './app/layout/tab/tab-group-theme-example';
import {TabGroupAsyncExample} from './app/layout/tab/tab-group-async-example';
import {TabNavBarBasicExample} from './app/layout/tab/tab-nav-bar-basic-example';
import {ButtonTypesExample} from './app/buttons-and-indicators/button/button-types-example';
import {ButtonToggleOverviewExample} from './app/buttons-and-indicators/button-toggle/button-toggle-overview-example';
import {ButtonToggleExclusiveExample} from './app/buttons-and-indicators/button-toggle/button-toggle-exclusive-example';
import {BadgeOverviewExample} from './app/buttons-and-indicators/badge/badge-overview-example';
import {ChipsOverviewExample} from './app/buttons-and-indicators/chips/chips-overview-example';
import {ChipsStackedExample} from './app/buttons-and-indicators/chips/chips-stacked-example';
import {ChipsAutocompleteExample} from './app/buttons-and-indicators/chips/chips-autocomplete-example';
import {ChipsInputExample} from './app/buttons-and-indicators/chips/chips-input-example';
import {IconOverviewExample} from './app/buttons-and-indicators/icon/icon-overview-example';
import {IconSvgExample} from './app/buttons-and-indicators/icon/icon-svg-example';
import {ProgressSpinnerOverviewExample} from './app/buttons-and-indicators/progress-spinner/progress-spinner-overview-example';
import {ProgressSpinnerConfigurableExample} from './app/buttons-and-indicators/progress-spinner/progress-spinner-configurable-example';
import {ProgressBarBufferExample} from './app/buttons-and-indicators/progress-bar/progress-bar-buffer-example';
import {ProgressBarDeterminateExample} from './app/buttons-and-indicators/progress-bar/progress-bar-determinate-example';
import {ProgressBarIndeterminateExample} from './app/buttons-and-indicators/progress-bar/progress-bar-indeterminate-example';
import {ProgressBarQueryExample} from './app/buttons-and-indicators/progress-bar/progress-bar-query-example';
import {ProgressBarConfigurableExample} from './app/buttons-and-indicators/progress-bar/progress-bar-configurable-example';
import {RippleOverviewExample} from './app/buttons-and-indicators/ripples/ripple-overview-example';
import {BottomSheetOverviewExample, BottomSheetOverviewExampleSheet} from './app/popups-and-modals/bottom-sheet/bottom-sheet-overview-example';
import {DialogOverviewExample, DialogOverviewExampleDialog} from './app/popups-and-modals/dialog/dialog-overview-example';
import {SnackBarOverviewExample} from './app/popups-and-modals/snackbar/snack-bar-overview-example';
import {SnackBarComponentExample, PizzaPartyComponent} from './app/popups-and-modals/snackbar/snack-bar-component-example';
import {TooltipOverviewExample} from './app/popups-and-modals/tooltip/tooltip-overview-example';
import {TooltipPositionExample} from './app/popups-and-modals/tooltip/tooltip-position-example';
import {TooltipCustomClassExample} from './app/popups-and-modals/tooltip/tooltip-custom-class-example';
import {TooltipDelayExample} from './app/popups-and-modals/tooltip/tooltip-delay-example';
import {TooltipDisabledExample} from './app/popups-and-modals/tooltip/tooltip-disabled-example';
import {TooltipMessageExample} from './app/popups-and-modals/tooltip/tooltip-message-example';
import {TooltipManualExample} from './app/popups-and-modals/tooltip/tooltip-manual-example';
import {TooltipModifiedDefaultsExample} from './app/popups-and-modals/tooltip/tooltip-modified-defaults-example';
import {TooltipAutoHideExample} from './app/popups-and-modals/tooltip/tooltip-auto-hide-example';
import {PaginatorConfigurableExample} from './app/data-table/paginator/paginator-configurable-example';
import {SortOverviewExample} from './app/data-table/sort-header/sort-overview-example';
import {TableBasicExample} from './app/data-table/table/table-basic-example';
import {TableBasicFlexExample} from './app/data-table/table/table-basic-flex-example';
import {TableDynamicColumnsExample} from './app/data-table/table/table-dynamic-columns-example';
import {TableExpandableRowsExample} from './app/data-table/table/table-expandable-rows-example';
import {TableFilteringExample} from './app/data-table/table/table-filtering-example';
import {TableFooterRowExample} from './app/data-table/table/table-footer-row-example';
import {TableHttpExample} from './app/data-table/table/table-http-example';
import {TableSelectionExample} from './app/data-table/table/table-selection-example';
import {TableMultipleHeaderFooterExample} from './app/data-table/table/table-multiple-header-footer-example';
import {TableOverviewExample} from './app/data-table/table/table-overview-example';
import {TableStickyColumnsExample} from './app/data-table/table/table-sticky-columns-example';
import {TableStickyHeaderExample} from './app/data-table/table/table-sticky-header-example';
import {TableStickyFooterExample} from './app/data-table/table/table-sticky-footer-example';
import {TableReorderableExample} from './app/data-table/table/table-reorderable-example';
import {TablePaginationExample} from './app/data-table/table/table-pagination-example';
import {TableRowContextExample} from './app/data-table/table/table-row-context-example';
import {TableSortingExample} from './app/data-table/table/table-sorting-example';

// Default MatFormField appearance to 'fill' as that is the new recommended approach and the
// `legacy` and `standard` appearances are scheduled for deprecation in version 10.
// This makes the examples that use MatFormField render the same in StackBlitz as on the docs site.
const components: any[] =
    [RadioOverviewExample, RadioNgModelExample, CheckboxOverviewExample, CheckboxConfigurableExample, SlideToggleOverviewExample,
      SlideToggleConfigurableExample, AutocompleteOverviewExample, AutocompleteSimpleExample, AutocompleteDisplayExample, AutocompleteFilterExample,
      AutocompleteOptgroupExample, AutocompleteAutoActiveFirstOptionExample, SelectOverviewExample, SelectValueBindingExample, SelectFormExample,
      SelectHintErrorExample, SelectDisabledExample, SelectResetExample, SelectOptgroupExample, SelectMultipleExample, SelectCustomTriggerExample,
      SelectNoRippleExample, SelectPanelClassExample, InputOverviewExample, SelectErrorStateMatcherExample, InputErrorStateMatcherExample,
      TextFieldAutosizeTextareaExample, InputClearableExample, InputErrorsExample, InputFormExample, InputHintExample, InputPrefixSuffixExample,
      SliderOverviewExample, SliderFormattingExample, SliderConfigurableExample, DatepickerOverviewExample, DatepickerStartViewExample,
      DatepickerValueExample, DatepickerMinMaxExample, DatepickerFilterExample, DatepickerEventsExample, DatepickerDisabledExample,
      DatepickerTouchExample, DatepickerApiExample,
      FormFieldOverviewExample, FormFieldLabelExample, FormFieldAppearanceExample, FormFieldHintExample, FormFieldErrorExample,
      FormFieldPrefixSuffixExample, FormFieldThemingExample, FormFieldCustomControlExample, MyTelInput, MenuOverviewExample, MenuIconsExample,
      NestedMenuExample, ToolbarOverviewExample, ToolbarMultirowExample, SidenavOverviewExample, SidenavDrawerOverviewExample,
      SidenavPositionExample, SidenavOpenCloseExample, SidenavModeExample, SidenavDisableCloseExample, SidenavFixedExample, SidenavResponsiveExample,
      SidenavAutosizeExample, CardOverviewExample, CardFancyExample, DividerOverviewExample, ExpansionOverviewExample, ExpansionStepsExample,
      GridListOverviewExample, GridListDynamicExample, ListOverviewExample, ListSectionsExample, TreeDynamicExample, TreeFlatOverviewExample,
      TreeChecklistExample, TreeNestedOverviewExample, TreeLoadmoreExample, StepperOverviewExample, StepperOptionalExample, TabGroupBasicExample,
      TabGroupCustomLabelExample, TabGroupDynamicHeightExample, TabGroupDynamicExample, TabGroupHeaderBelowExample, TabGroupLazyLoadedExample,
      TabGroupThemeExample, TabGroupAsyncExample, TabNavBarBasicExample,
      ButtonTypesExample, ButtonToggleOverviewExample, ButtonToggleExclusiveExample, BadgeOverviewExample, ChipsOverviewExample,
      ChipsStackedExample, ChipsAutocompleteExample, ChipsInputExample, IconOverviewExample, IconSvgExample,
      ProgressSpinnerOverviewExample, ProgressSpinnerConfigurableExample, ProgressBarBufferExample, ProgressBarDeterminateExample,
      ProgressBarIndeterminateExample, ProgressBarQueryExample, ProgressBarConfigurableExample, RippleOverviewExample,
      BottomSheetOverviewExample, BottomSheetOverviewExampleSheet, DialogOverviewExample, DialogOverviewExampleDialog, SnackBarOverviewExample,
      SnackBarComponentExample, PizzaPartyComponent, TooltipOverviewExample, TooltipPositionExample, TooltipCustomClassExample, TooltipDelayExample,
      TooltipDisabledExample, TooltipMessageExample, TooltipManualExample, TooltipModifiedDefaultsExample, TooltipAutoHideExample,
      PaginatorConfigurableExample, SortOverviewExample, TableBasicExample, TableBasicFlexExample, TableDynamicColumnsExample,
      TableExpandableRowsExample, TableFilteringExample, TableFooterRowExample, TableHttpExample, TableSelectionExample,
      TableMultipleHeaderFooterExample, TableOverviewExample, TableStickyColumnsExample, TablePaginationExample, TableRowContextExample,
      TableStickyHeaderExample, TableStickyFooterExample, TableReorderableExample, TableSortingExample,
      DatepickerLocaleExample, DatepickerMomentExample, DatepickerFormatsExample];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  entryComponents: components,
  declarations: components,
  bootstrap:  [RadioOverviewExample, RadioNgModelExample, CheckboxOverviewExample, CheckboxConfigurableExample, SlideToggleOverviewExample,
                   SlideToggleConfigurableExample, AutocompleteOverviewExample, AutocompleteSimpleExample, AutocompleteDisplayExample, AutocompleteFilterExample,
                   AutocompleteOptgroupExample, AutocompleteAutoActiveFirstOptionExample, SelectOverviewExample, SelectValueBindingExample, SelectFormExample,
                   SelectHintErrorExample, SelectDisabledExample, SelectResetExample, SelectOptgroupExample, SelectMultipleExample, SelectCustomTriggerExample,
                   SelectNoRippleExample, SelectPanelClassExample, InputOverviewExample, SelectErrorStateMatcherExample, InputErrorStateMatcherExample,
                   TextFieldAutosizeTextareaExample, InputClearableExample, InputErrorsExample, InputFormExample, InputHintExample, InputPrefixSuffixExample,
                   SliderOverviewExample, SliderFormattingExample, SliderConfigurableExample, DatepickerOverviewExample, DatepickerStartViewExample,
                   DatepickerValueExample, DatepickerMinMaxExample, DatepickerFilterExample, DatepickerEventsExample, DatepickerDisabledExample,
                   DatepickerTouchExample, DatepickerApiExample,
                   FormFieldOverviewExample, FormFieldLabelExample, FormFieldAppearanceExample, FormFieldHintExample, FormFieldErrorExample,
                   FormFieldPrefixSuffixExample, FormFieldThemingExample, FormFieldCustomControlExample, MyTelInput, MenuOverviewExample, MenuIconsExample,
                   NestedMenuExample, ToolbarOverviewExample, ToolbarMultirowExample, SidenavOverviewExample, SidenavDrawerOverviewExample,
                   SidenavPositionExample, SidenavOpenCloseExample, SidenavModeExample, SidenavDisableCloseExample, SidenavFixedExample, SidenavResponsiveExample,
                   SidenavAutosizeExample, CardOverviewExample, CardFancyExample, DividerOverviewExample, ExpansionOverviewExample, ExpansionStepsExample,
                   GridListOverviewExample, GridListDynamicExample, ListOverviewExample, ListSectionsExample, TreeDynamicExample, TreeFlatOverviewExample,
                   TreeChecklistExample, TreeNestedOverviewExample, TreeLoadmoreExample, StepperOverviewExample, StepperOptionalExample, TabGroupBasicExample,
                   TabGroupCustomLabelExample, TabGroupDynamicHeightExample, TabGroupDynamicExample, TabGroupHeaderBelowExample, TabGroupLazyLoadedExample,
                   TabGroupThemeExample, TabGroupAsyncExample, TabNavBarBasicExample,
                   ButtonTypesExample, ButtonToggleOverviewExample, ButtonToggleExclusiveExample, BadgeOverviewExample, ChipsOverviewExample,
                   ChipsStackedExample, ChipsAutocompleteExample, ChipsInputExample, IconOverviewExample, IconSvgExample,
                   ProgressSpinnerOverviewExample, ProgressSpinnerConfigurableExample, ProgressBarBufferExample, ProgressBarDeterminateExample,
                   ProgressBarIndeterminateExample, ProgressBarQueryExample, ProgressBarConfigurableExample, RippleOverviewExample,
                   BottomSheetOverviewExample, DialogOverviewExample, SnackBarOverviewExample, SnackBarComponentExample, TooltipOverviewExample,
                   TooltipPositionExample, TooltipCustomClassExample, TooltipDelayExample, TooltipDisabledExample, TooltipMessageExample, TooltipManualExample,
                   TooltipModifiedDefaultsExample, TooltipAutoHideExample,
                   PaginatorConfigurableExample, SortOverviewExample, TableBasicExample, TableBasicFlexExample, TableDynamicColumnsExample,
                   TableExpandableRowsExample, TableFilteringExample, TableFooterRowExample, TableHttpExample, TableSelectionExample,
                   TableMultipleHeaderFooterExample, TableOverviewExample, TableStickyColumnsExample, TablePaginationExample, TableRowContextExample,
                   TableStickyHeaderExample, TableStickyFooterExample, TableReorderableExample, TableSortingExample,
                   DatepickerLocaleExample, DatepickerMomentExample, DatepickerFormatsExample],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
