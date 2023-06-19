import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChipsRoutingModule } from './chips-routing.module';
import {ChipsOverviewExample} from "./components/chips-overview-example";
import {MatChipsModule} from "@angular/material/chips";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ChipsComponent} from "./chips.component";
import {ChipsStackedExample} from "./components/chips-stacked-example";
import {ChipsAutocompleteExample} from "./components/chips-autocomplete-example";
import {ChipsInputExample} from "./components/chips-input-example";


@NgModule({
  declarations: [ChipsComponent, ChipsOverviewExample, ChipsStackedExample, ChipsAutocompleteExample, ChipsInputExample],
  imports: [
    CommonModule,
    ChipsRoutingModule,
    MatChipsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule
  ]
})
export class ChipsModule { }
