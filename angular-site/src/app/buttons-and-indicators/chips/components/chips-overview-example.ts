import {Component} from '@angular/core';

/**
 * @title Basic chips
 */
@Component({
  selector: 'chips-overview-example',
  templateUrl: 'chips-overview-example.html',

})
export class ChipsOverviewExample {
  clickedValue = '';
  clickedBasicChip(value: string) {
    this.clickedValue = value;
  };
}
