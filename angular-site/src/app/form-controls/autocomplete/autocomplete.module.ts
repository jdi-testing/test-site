import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatInputModule} from "@angular/material/input";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatRippleModule} from '@angular/material/core';

import {AutocompleteRoutingModule} from './autocomplete-routing.module';
import {AutocompleteComponent} from './autocomplete.component';
import {AutocompleteFilterExample} from './components/autocomplete-filter-example';
import {AutocompleteDisplayExample} from './components/autocomplete-display-example';
import {AutocompleteAutoActiveFirstOptionExample} from './components/autocomplete-auto-active-first-option-example';
import {AutocompleteOptgroupExample} from './components/autocomplete-optgroup-example';
import {AutocompleteOverviewExample} from './components/autocomplete-overview-example';
import {AutocompleteSimpleExample} from './components/autocomplete-simple-example';
import {AutocompleteAutoSelectActiveOptionComponent} from './components/autocomplete-auto-select-active-option/autocomplete-auto-select-active-option.component';
import {AutocompleteDisableRippleComponent} from './components/autocomplete-disable-ripple/autocomplete-disable-ripple.component';
import { AutocompleteHideSingleSelectionIndicatorOptionComponent } from './components/autocomplete-hide-single-selection-indicator-option/autocomplete-hide-single-selection-indicator-option.component';
import { MatAutocompleteOptionDisabledComponent } from './components/mat-autocomplete-option-disabled/mat-autocomplete-option-disabled.component';
import { AutocompletePanelWidthOptionComponent } from './components/autocomplete-panel-width-option/autocomplete-panel-width-option';
import { AutocompletePositionOptionComponent } from './components/autocomplete-position-option/autocomplete-position-option.component';
import { AutocompletePlainInputOptionComponent } from './components/autocomplete-plain-input-option/autocomplete-plain-input-option.component';

@NgModule({
  declarations: [
    AutocompleteComponent,
    AutocompleteFilterExample,
    AutocompleteDisplayExample,
    AutocompleteAutoActiveFirstOptionExample,
    AutocompleteOptgroupExample,
    AutocompleteOverviewExample,
    AutocompleteSimpleExample,
    AutocompleteAutoSelectActiveOptionComponent,
    AutocompleteDisableRippleComponent,
    AutocompleteHideSingleSelectionIndicatorOptionComponent,
    MatAutocompleteOptionDisabledComponent,
    AutocompletePanelWidthOptionComponent,
    AutocompletePositionOptionComponent,
    AutocompletePlainInputOptionComponent
  ],
  imports: [
    CommonModule,
    AutocompleteRoutingModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSlideToggleModule,
    MatRippleModule,
  ]
})
export class AutocompleteModule { }
