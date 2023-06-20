import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

/**
 * @title Simple autocomplete
 */
@Component({
  selector: 'autocomplete-simple-example',
  templateUrl: 'autocomplete-simple-example.html',
})
export class AutocompleteSimpleExample {
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
}
