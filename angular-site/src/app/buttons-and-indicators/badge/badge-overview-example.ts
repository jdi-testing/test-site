import {Component} from '@angular/core';

/**
 * @title Badge overview
 */
@Component({
  selector: 'badge-overview-example',
  templateUrl: 'badge-overview-example.html',
})
export class BadgeOverviewExample {
  showMsg = false;
  isHidden = false;
  isDisabled = true;

  public toggleBadgeIsVisible(): void {
    this.isHidden = !this.isHidden;
  }

  public toggleBadgeIsDisabled(): void {
    this.isDisabled = !this.isDisabled;
  }
}
