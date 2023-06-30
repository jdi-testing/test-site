import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChipsRoutingModule } from './chips-routing.module';
import { ChipsComponent } from './chips.component';
import {ChipsStackedExample} from './components/chips-stacked-example';
import {ChipsOverviewExample} from './components/chips-overview-example';
import {ChipsAutocompleteExample} from './components/chips-autocomplete-example';
import {ChipsInputExample} from './components/chips-input-example';
import {MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ChipsWithFormControlComponent } from './components/chips-with-form-control/chips-with-form-control.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { ChipsDragAndDropComponent } from './components/chips-drag-and-drop/chips-drag-and-drop.component';
import { ChipsAvatarComponent } from './components/chips-avatar/chips-avatar.component';
import { ChipsDisableRippleComponent } from './components/chips-disable-ripple/chips-disable-ripple.component';
import { ChipsDisabledComponent } from './components/chips-disabled/chips-disabled.component';
import { ChipsHighlightedComponent } from './components/chips-highlighted/chips-highlighted.component';
import { ChipsDefaultColorComponent } from './components/chips-default-color/chips-default-color.component';
import {ChipsMultipleComponent} from "./components/chips-multiple/chips-multiple.component";
import {ChipsRequired} from "./components/chips-required/chips-required";


@NgModule({
  declarations: [
    ChipsComponent,
    ChipsStackedExample,
    ChipsOverviewExample,
    ChipsAutocompleteExample,
    ChipsInputExample,
    ChipsWithFormControlComponent,
    ChipsDragAndDropComponent,
    ChipsAvatarComponent,
    ChipsDisableRippleComponent,
    ChipsDisabledComponent,
    ChipsHighlightedComponent,
    ChipsDefaultColorComponent,
    ChipsMultipleComponent,
    ChipsRequired,
  ],
  imports: [
    CommonModule,
    ChipsRoutingModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatButtonModule,
    FormsModule,
    MatSelectModule,
    DragDropModule,
  ]
})
export class ChipsModule { }
