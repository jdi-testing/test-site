import {Component} from '@angular/core';

/**
 * @title Indeterminate progress-bar
 */
@Component({
  selector: 'progress-bar-indeterminate-example',
  templateUrl: 'progress-bar-indeterminate-example.html',
  styleUrls: ['progress-bar-indeterminate-example.css'],
})
export class ProgressBarIndeterminateExample {
  isShown = false;

  showProgressBar(seconds: number): void {
     this.isShown = true;
     setTimeout(() => {
                  this.isShown = false;
                }, seconds * 1000);
  }
}
