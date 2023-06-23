import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatepickerRoutingModule } from './datepicker-routing.module';
import { DatepickerComponent } from './datepicker.component';
import {DatepickerApiExample} from './components/datepicker-api-example';
import {DatepickerDisabledExample} from './components/datepicker-disabled-example';
import {DatepickerEventsExample} from './components/datepicker-events-example';
import {DatepickerFilterExample} from './components/datepicker-filter-example';
import {DatepickerFormatsExample} from './components/datepicker-formats-example';
import {DatepickerLocaleExample} from './components/datepicker-locale-example';
import {DatepickerMinMaxExample} from './components/datepicker-min-max-example';
import {DatepickerMomentExample} from './components/datepicker-moment-example';
import {DatepickerOverviewExample} from './components/datepicker-overview-example';
import {DatepickerStartViewExample} from './components/datepicker-start-view-example';
import {DatepickerTouchExample} from './components/datepicker-touch-example';
import {DatepickerValueExample} from './components/datepicker-value-example';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    DatepickerComponent,
    DatepickerApiExample,
    DatepickerDisabledExample,
    DatepickerEventsExample,
    DatepickerFilterExample,
    DatepickerFormatsExample,
    DatepickerLocaleExample,
    DatepickerMinMaxExample,
    DatepickerMomentExample,
    DatepickerOverviewExample,
    DatepickerStartViewExample,
    DatepickerTouchExample,
    DatepickerValueExample
  ],
  imports: [
    CommonModule,
    DatepickerRoutingModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
  ]
})
export class DatepickerModule { }
