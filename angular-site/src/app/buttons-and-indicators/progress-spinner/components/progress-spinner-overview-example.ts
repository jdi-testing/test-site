import {Component} from '@angular/core';

/**
 * @title Basic progress-spinner
 */
@Component({
  selector: 'progress-spinner-overview-example',
  templateUrl: 'progress-spinner-overview-example.html',
  styleUrls: ['progress-spinner-overview-example.css'],
})
export class ProgressSpinnerOverviewExample {
  spinnerIsShown = false;

  showSpinner(seconds: number): void {
     this.spinnerIsShown = true;
     setTimeout(() => {
                  this.spinnerIsShown = false;
                }, seconds * 1000);
  }
}
