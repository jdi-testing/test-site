import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-radio-buttons-required',
  templateUrl: './radio-buttons-required.component.html',
  styleUrls: ['radio-buttons-required.component.css'],
})
export class RadioButtonsRequiredComponent {
  formControl = new FormControl();
}
