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
import {MatDatepickerModule} from '@angular/material/datepicker';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatMomentDateModule} from "@angular/material-moment-adapter";
import { DateRangePickerFormsExample } from './components/date-range-picker-forms/date-range-picker-forms-example';
import { DatepickerViewsSelectionExample } from './components/datepicker-views-selection/datepicker-views-selection-example';
import { DatepickerColorExample } from './components/datepicker-color/datepicker-color-example';
import { DatepickerActionsExample } from './components/datepicker-actions/datepicker-actions-example';
import { DateRangePickerComparisonExample } from './components/date-range-picker-comparison/date-range-picker-comparison-example';
import { DateRangePickerSelectionStrategyExample } from './components/date-range-picker-selection-strategy/date-range-picker-selection-strategy-example';
import { DatepickerInlineCalendarExample } from './components/datepicker-inline-calendar/datepicker-inline-calendar-example';
import { DateRangePickerOverviewExample } from './components/date-range-picker-overview/date-range-picker-overview-example';
import { DatepickerCustomIconExample } from './components/datepicker-custom-icon/datepicker-custom-icon-example';
import { DatepickerDateClassExample } from './components/datepicker-date-class/datepicker-date-class-example';
import { DatepickerCustomHeaderExample } from './components/datepicker-custom-header/datepicker-custom-header-example';


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
    DatepickerValueExample,
  ],
  imports: [
    CommonModule,
    DatepickerRoutingModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatMomentDateModule,
    DateRangePickerFormsExample,
    DatepickerViewsSelectionExample,
    DatepickerColorExample,
    DatepickerActionsExample,
    DateRangePickerComparisonExample,
    DateRangePickerSelectionStrategyExample,
    DatepickerInlineCalendarExample,
    DateRangePickerOverviewExample,
    DatepickerCustomIconExample,
    DatepickerDateClassExample,
    DatepickerCustomHeaderExample
  ]
})
export class DatepickerModule { }
