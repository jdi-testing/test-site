import {Component} from '@angular/core';
import {DateFilterFn} from "@angular/material/datepicker";

/** @title Datepicker with filter validation */
@Component({
  selector: 'datepicker-filter-example',
  templateUrl: 'datepicker-filter-example.html',
})
export class DatepickerFilterExample {
  myFilter = (d: any ) => {
    const day = new Date(d).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };
}
