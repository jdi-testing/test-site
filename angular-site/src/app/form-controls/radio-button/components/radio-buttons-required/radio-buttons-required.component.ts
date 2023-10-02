import { Component, Input } from '@angular/core';
import {FormControl} from "@angular/forms";
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-radio-buttons-required',
  templateUrl: './radio-buttons-required.component.html',
  styleUrls: ['radio-buttons-required.component.css'],
})
export class RadioButtonsRequiredComponent {
  @Input()
  colorTheme: ThemePalette

  formControl = new FormControl();
}
