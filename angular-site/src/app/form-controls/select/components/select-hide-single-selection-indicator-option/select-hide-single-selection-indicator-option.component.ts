import {Component} from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'select-hide-single-selection-indicator-option',
  templateUrl: './select-hide-single-selection-indicator-option.component.html',
})
export class SelectHideSingleSelectionIndicatorOptionComponent {
  selectedValue?: string;

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
}
