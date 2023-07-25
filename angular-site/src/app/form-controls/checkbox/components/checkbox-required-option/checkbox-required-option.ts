import {Component} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'checkbox-required-option',
  styleUrls: ['./checkbox-required-option.css'],
  templateUrl: './checkbox-required-option.html'
})
export class CheckboxRequiredComponent {
  formControl = new FormControl();
}
