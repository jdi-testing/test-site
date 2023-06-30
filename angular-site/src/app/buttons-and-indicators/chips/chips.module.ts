import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChipsRoutingModule } from './chips-routing.module';
import { ChipsComponent } from './chips.component';
import {ChipsStackedExample} from './components/chips-stacked-example';
import {ChipsOverviewExample} from './components/chips-overview-example';
import {ChipsAutocompleteExample} from './components/chips-autocomplete-example';
import {ChipsInputExample} from './components/chips-input-example';
import {MatIconModule} from '@angular/material/icon';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatChipsModule} from "@angular/material/chips";
import {MatAutocompleteModule} from "@angular/material/autocomplete";


@NgModule({
  declarations: [ChipsComponent,
    ChipsStackedExample,
    ChipsOverviewExample,
    ChipsAutocompleteExample,
    ChipsInputExample,
  ],
  imports: [
    CommonModule,
    ChipsRoutingModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatAutocompleteModule,
    ReactiveFormsModule
  ]
})
export class ChipsModule { }
