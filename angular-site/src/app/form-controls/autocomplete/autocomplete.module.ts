import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutocompleteRoutingModule } from './autocomplete-routing.module';
import { AutocompleteComponent } from './autocomplete.component';
import {AutocompleteFilterExample} from './components/autocomplete-filter-example';
import {AutocompleteDisplayExample} from './components/autocomplete-display-example';
import {AutocompleteAutoActiveFirstOptionExample} from './components/autocomplete-auto-active-first-option-example';
import {AutocompleteOptgroupExample} from './components/autocomplete-optgroup-example';
import {AutocompleteOverviewExample} from './components/autocomplete-overview-example';
import {AutocompleteSimpleExample} from './components/autocomplete-simple-example';
import {MatLegacyFormFieldModule as MatFormFieldModule} from '@angular/material/legacy-form-field';
import {MatLegacyAutocompleteModule as MatAutocompleteModule} from '@angular/material/legacy-autocomplete';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatLegacyInputModule as MatInputModule} from '@angular/material/legacy-input';
import {MatLegacySlideToggleModule as MatSlideToggleModule} from '@angular/material/legacy-slide-toggle';


@NgModule({
  declarations: [
    AutocompleteComponent,
    AutocompleteFilterExample,
    AutocompleteDisplayExample,
    AutocompleteAutoActiveFirstOptionExample,
    AutocompleteOptgroupExample,
    AutocompleteOverviewExample,
    AutocompleteSimpleExample,
  ],
  imports: [
    CommonModule,
    AutocompleteRoutingModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSlideToggleModule,
  ]
})
export class AutocompleteModule { }
