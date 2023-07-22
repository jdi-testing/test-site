import {Component} from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'select-placeholder-option',
  templateUrl: './select-placeholder-option.component.html',
})
export class SelectPlaceholderOptionComponent {
  selectedValue?: string;

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
}
