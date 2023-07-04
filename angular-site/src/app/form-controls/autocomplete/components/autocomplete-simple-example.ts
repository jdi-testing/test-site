import {Component} from '@angular/core';
import {UntypedFormControl} from '@angular/forms';

/**
 * @title Simple autocomplete
 */
@Component({
  selector: 'autocomplete-simple-example',
  templateUrl: 'autocomplete-simple-example.html',
})
export class AutocompleteSimpleExample {
  myControl = new UntypedFormControl();
  options: string[] = ['One', 'Two', 'Three'];
}
