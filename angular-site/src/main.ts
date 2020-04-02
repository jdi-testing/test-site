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

import {RadioOverviewExample} from './app/radio-button/radio-overview-example';
import {RadioNgModelExample} from './app/radio-button/radio-ng-model-example';
import {CheckboxOverviewExample} from './app/checkbox/checkbox-overview-example';
import {CheckboxConfigurableExample} from './app/checkbox/checkbox-configurable-example';
import {SlideToggleOverviewExample} from './app/slide-toggle/slide-toggle-overview-example';
import {SlideToggleConfigurableExample} from './app/slide-toggle/slide-toggle-configurable-example';
import {AutocompleteOverviewExample} from './app/autocomplete/autocomplete-overview-example';
import {AutocompleteSimpleExample} from './app/autocomplete/autocomplete-simple-example';
import {AutocompleteDisplayExample} from './app/autocomplete/autocomplete-display-example';
import {AutocompleteFilterExample} from './app/autocomplete/autocomplete-filter-example';
import {AutocompleteOptgroupExample} from './app/autocomplete/autocomplete-optgroup-example';
import {AutocompleteAutoActiveFirstOptionExample} from './app/autocomplete/autocomplete-auto-active-first-option-example';
import {SelectOverviewExample} from './app/select/select-overview-example';
import {SelectValueBindingExample} from './app/select/select-value-binding-example';
import {SelectFormExample} from './app/select/select-form-example';
import {SelectHintErrorExample} from './app/select/select-hint-error-example';
import {SelectDisabledExample} from './app/select/select-disabled-example';
import {SelectResetExample} from './app/select/select-reset-example';
import {SelectOptgroupExample} from './app/select/select-optgroup-example';
import {SelectMultipleExample} from './app/select/select-multiple-example';
import {SelectCustomTriggerExample} from './app/select/select-custom-trigger-example';
import {SelectNoRippleExample} from './app/select/select-no-ripple-example';
import {SelectPanelClassExample} from './app/select/select-panel-class-example';
import {SelectErrorStateMatcherExample} from './app/select/select-error-state-matcher-example';
import {InputOverviewExample} from './app/input/input-overview-example';
import {InputErrorStateMatcherExample} from './app/input/input-error-state-matcher-example';
import {TextFieldAutosizeTextareaExample} from './app/input/text-field-autosize-textarea-example';
import {InputClearableExample} from './app/input/input-clearable-example';
import {InputErrorsExample} from './app/input/input-errors-example';
import {InputFormExample} from './app/input/input-form-example';
import {InputHintExample} from './app/input/input-hint-example';
import {InputPrefixSuffixExample} from './app/input/input-prefix-suffix-example';
import {SliderOverviewExample} from './app/slider/slider-overview-example';
import {SliderFormattingExample} from './app/slider/slider-formatting-example';
import {SliderConfigurableExample} from './app/slider/slider-configurable-example';
import {DatepickerOverviewExample} from './app/datepicker/datepicker-overview-example';
import {DatepickerStartViewExample} from './app/datepicker/datepicker-start-view-example';
import {DatepickerValueExample} from './app/datepicker/datepicker-value-example';
import {DatepickerMinMaxExample} from './app/datepicker/datepicker-min-max-example';
import {DatepickerFilterExample} from './app/datepicker/datepicker-filter-example';
import {DatepickerEventsExample} from './app/datepicker/datepicker-events-example';
import {DatepickerDisabledExample} from './app/datepicker/datepicker-disabled-example';
import {DatepickerTouchExample} from './app/datepicker/datepicker-touch-example';
import {DatepickerApiExample} from './app/datepicker/datepicker-api-example';
// import {DatepickerLocaleExample} from './app/datepicker/datepicker-locale-example';
// import {DatepickerMomentExample} from './app/datepicker/datepicker-moment-example';
// import {DatepickerFormatsExample} from './app/datepicker/datepicker-formats-example';
import {FormFieldOverviewExample} from './app/form-field/form-field-overview-example';
import {FormFieldLabelExample} from './app/form-field/form-field-label-example';
import {FormFieldAppearanceExample} from './app/form-field/form-field-appearance-example';
import {FormFieldHintExample} from './app/form-field/form-field-hint-example';
import {FormFieldErrorExample} from './app/form-field/form-field-error-example';
import {FormFieldPrefixSuffixExample} from './app/form-field/form-field-prefix-suffix-example';
import {FormFieldThemingExample} from './app/form-field/form-field-theming-example';
import {FormFieldCustomControlExample, MyTelInput} from './app/form-field/form-field-custom-control-example';
import {MenuOverviewExample} from './app/menu/menu-overview-example';
import {MenuIconsExample} from './app/menu/menu-icons-example';
import {NestedMenuExample} from './app/menu/nested-menu-example';
import {ToolbarOverviewExample} from './app/toolbar/toolbar-overview-example';
import {ToolbarMultirowExample} from './app/toolbar/toolbar-multirow-example';
import {SidenavOverviewExample} from './app/sidenav/sidenav-overview-example';
import {SidenavDrawerOverviewExample} from './app/sidenav/sidenav-drawer-overview-example';
// There should be some more sidenavs
import {SidenavAutosizeExample} from './app/sidenav/sidenav-autosize-example';
// There should be some more sidenavs
import {CardOverviewExample} from './app/card/card-overview-example';
import {CardFancyExample} from './app/card/card-fancy-example';
import {DividerOverviewExample} from './app/divider/divider-overview-example';
import {ExpansionOverviewExample} from './app/expansion-panel/expansion-overview-example';
import {ExpansionStepsExample} from './app/expansion-panel/expansion-steps-example';
import {GridListOverviewExample} from './app/grid-list/grid-list-overview-example';
import {GridListDynamicExample} from './app/grid-list/grid-list-dynamic-example';
import {ListOverviewExample} from './app/list/list-overview-example';
import {ListSectionsExample} from './app/list/list-sections-example';
import {TreeDynamicExample} from './app/tree/tree-dynamic-example';
import {TreeFlatOverviewExample} from './app/tree/tree-flat-overview-example';
import {TreeChecklistExample} from './app/tree/tree-checklist-example';
import {TreeNestedOverviewExample} from './app/tree/tree-nested-overview-example';
import {TreeLoadmoreExample} from './app/tree/tree-loadmore-example';
import {StepperOverviewExample} from './app/stepper/stepper-overview-example';
import {StepperOptionalExample} from './app/stepper/stepper-optional-example';
import {TabGroupBasicExample} from './app/tab/tab-group-basic-example';
import {TabGroupCustomLabelExample} from './app/tab/tab-group-custom-label-example';
import {TabGroupDynamicHeightExample} from './app/tab/tab-group-dynamic-height-example';
import {TabGroupDynamicExample} from './app/tab/tab-group-dynamic-example';
import {TabGroupHeaderBelowExample} from './app/tab/tab-group-header-below-example';
import {TabGroupLazyLoadedExample} from './app/tab/tab-group-lazy-loaded-example';
import {TabGroupThemeExample} from './app/tab/tab-group-theme-example';
import {TabGroupAsyncExample} from './app/tab/tab-group-async-example';
import {TabNavBarBasicExample} from './app/tab/tab-nav-bar-basic-example';
import {ButtonTypesExample} from './app/button/button-types-example';
import {ButtonToggleOverviewExample} from './app/button-toggle/button-toggle-overview-example';
import {ButtonToggleExclusiveExample} from './app/button-toggle/button-toggle-exclusive-example';

// Default MatFormField appearance to 'fill' as that is the new recommended approach and the
// `legacy` and `standard` appearances are scheduled for deprecation in version 10.
// This makes the examples that use MatFormField render the same in StackBlitz as on the docs site.
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

  entryComponents: [RadioOverviewExample, RadioNgModelExample, CheckboxOverviewExample, CheckboxConfigurableExample, SlideToggleOverviewExample,
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
      SidenavAutosizeExample, CardOverviewExample, CardFancyExample, DividerOverviewExample, ExpansionOverviewExample, ExpansionStepsExample,
      GridListOverviewExample, GridListDynamicExample, ListOverviewExample, ListSectionsExample, TreeDynamicExample, TreeFlatOverviewExample,
      TreeChecklistExample, TreeNestedOverviewExample, TreeLoadmoreExample, StepperOverviewExample, StepperOptionalExample, TabGroupBasicExample,
      TabGroupCustomLabelExample, TabGroupDynamicHeightExample, TabGroupDynamicExample, TabGroupHeaderBelowExample, TabGroupLazyLoadedExample,
      TabGroupThemeExample, TabGroupAsyncExample, TabNavBarBasicExample,
      ButtonTypesExample, ButtonToggleOverviewExample, ButtonToggleExclusiveExample],

  declarations: [RadioOverviewExample, RadioNgModelExample, CheckboxOverviewExample, CheckboxConfigurableExample, SlideToggleOverviewExample,
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
      SidenavAutosizeExample, CardOverviewExample, CardFancyExample, DividerOverviewExample, ExpansionOverviewExample, ExpansionStepsExample,
      GridListOverviewExample, GridListDynamicExample, ListOverviewExample, ListSectionsExample, TreeDynamicExample, TreeFlatOverviewExample,
      TreeChecklistExample, TreeNestedOverviewExample, TreeLoadmoreExample, StepperOverviewExample, StepperOptionalExample, TabGroupBasicExample,
      TabGroupCustomLabelExample, TabGroupDynamicHeightExample, TabGroupDynamicExample, TabGroupHeaderBelowExample, TabGroupLazyLoadedExample,
      TabGroupThemeExample, TabGroupAsyncExample, TabNavBarBasicExample,
      ButtonTypesExample, ButtonToggleOverviewExample, ButtonToggleExclusiveExample],

  bootstrap: [RadioOverviewExample, RadioNgModelExample, CheckboxOverviewExample, CheckboxConfigurableExample, SlideToggleOverviewExample,
      SlideToggleConfigurableExample, AutocompleteOverviewExample, AutocompleteSimpleExample, AutocompleteDisplayExample, AutocompleteFilterExample,
      AutocompleteOptgroupExample, AutocompleteAutoActiveFirstOptionExample, SelectOverviewExample, SelectValueBindingExample, SelectFormExample,
      SelectHintErrorExample, SelectDisabledExample, SelectResetExample, SelectOptgroupExample, SelectMultipleExample, SelectCustomTriggerExample,
      SelectNoRippleExample, SelectPanelClassExample, SelectErrorStateMatcherExample, InputOverviewExample, InputErrorStateMatcherExample,
      TextFieldAutosizeTextareaExample, InputClearableExample, InputErrorsExample, InputFormExample, InputHintExample, InputPrefixSuffixExample,
      SliderOverviewExample, SliderFormattingExample, SliderConfigurableExample, DatepickerOverviewExample, DatepickerStartViewExample,
      DatepickerValueExample, DatepickerMinMaxExample, DatepickerFilterExample, DatepickerEventsExample, DatepickerDisabledExample,
      DatepickerTouchExample, DatepickerApiExample,
      FormFieldOverviewExample, FormFieldLabelExample, FormFieldAppearanceExample, FormFieldHintExample, FormFieldErrorExample,
      FormFieldPrefixSuffixExample, FormFieldThemingExample, FormFieldCustomControlExample, MyTelInput, MenuOverviewExample, MenuIconsExample,
      NestedMenuExample, ToolbarOverviewExample, ToolbarMultirowExample, SidenavOverviewExample, SidenavDrawerOverviewExample,
      SidenavAutosizeExample, CardOverviewExample, CardFancyExample, DividerOverviewExample, ExpansionOverviewExample, ExpansionStepsExample,
      GridListOverviewExample, GridListDynamicExample, ListOverviewExample, ListSectionsExample, TreeDynamicExample, TreeFlatOverviewExample,
      TreeChecklistExample, TreeNestedOverviewExample, TreeLoadmoreExample, StepperOverviewExample, StepperOptionalExample, TabGroupBasicExample,
      TabGroupCustomLabelExample, TabGroupDynamicHeightExample, TabGroupDynamicExample, TabGroupHeaderBelowExample, TabGroupLazyLoadedExample,
      TabGroupThemeExample, TabGroupAsyncExample, TabNavBarBasicExample,
      ButtonTypesExample, ButtonToggleOverviewExample, ButtonToggleExclusiveExample],

  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
