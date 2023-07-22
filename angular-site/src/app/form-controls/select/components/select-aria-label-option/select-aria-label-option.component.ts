import {Component} from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'select-aria-label-option',
  templateUrl: './select-aria-label-option.component.html',
})
export class SelectAriaLabelOptionComponent {
  selectedValue?: string;

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
}
