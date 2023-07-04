import {Component} from '@angular/core';

/**
 * @title Buffer progress-bar
 */
@Component({
  selector: 'progress-bar-buffer-example',
  templateUrl: 'progress-bar-buffer-example.html',
  styleUrls: ['progress-bar-buffer-example.css'],
})
export class ProgressBarBufferExample {
  isShown = false;

  showProgressBar(seconds: number): void {
     this.isShown = true;
     setTimeout(() => {
                  this.isShown = false;
                }, seconds * 1000);
  }
}
