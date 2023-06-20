import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatNativeDateModule} from '@angular/material/core';
import {BadgesModule} from './buttons-and-indicators/badge/badges.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {AppComponent} from './app.component';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {ButtonsModule} from './buttons-and-indicators/button/buttons.module';

import {BrowserModule} from '@angular/platform-browser';
import {ButtonToggleModule} from './buttons-and-indicators/button-toggle/button-toggle.module';
import {ChipsModule} from './buttons-and-indicators/chips/chips.module';
import {IconsModule} from './buttons-and-indicators/icon/icons.module';
import {ProgressBarModule} from './buttons-and-indicators/progress-bar/progress-bar.module';
import {ProgressSpinnerModule} from './buttons-and-indicators/progress-spinner/progress-spinner.module';
import {RippleModule} from './buttons-and-indicators/ripples/ripple.module';
import {PaginatorModule} from './data-table/paginator/paginator.module';
import {SortHeaderModule} from './data-table/sort-header/sort-header.module';
import {TablesModule} from './data-table/table/tables.module';
import {AutocompleteModule} from './form-controls/autocomplete/autocomplete.module';
import {CheckboxModule} from './form-controls/checkbox/checkbox.module';
import {DatepickerModule} from './form-controls/datepicker/datepicker.module';

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
    BadgesModule,
    ButtonsModule,
    ButtonToggleModule,
    MatSidenavModule,
    MatListModule,
    ChipsModule,
    IconsModule,
    ProgressBarModule,
    ProgressSpinnerModule,
    RippleModule,
    PaginatorModule,
    SortHeaderModule,
    TablesModule,
    AutocompleteModule,
    CheckboxModule,
    DatepickerModule,
  ],
  entryComponents: [AppComponent],
  declarations: [AppComponent],
  bootstrap:  [AppComponent],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ]
})
export class AppModule {}
