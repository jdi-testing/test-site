import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutocompleteRoutingModule } from './autocomplete-routing.module';
import { AutocompleteComponent } from './autocomplete.component';
import {AutocompleteOverviewExample} from "../autocomplete-overview-example";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";


@NgModule({
  declarations: [AutocompleteComponent, AutocompleteOverviewExample],
  imports: [
    CommonModule,
    AutocompleteRoutingModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatSlideToggleModule
  ]
})
export class AutocompleteModule { }
