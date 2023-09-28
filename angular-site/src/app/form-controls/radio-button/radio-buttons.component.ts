import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-radio-buttons',
  templateUrl: './radio-buttons.component.html',
})
export class RadioButtonsComponent {
  colorTheme: ThemePalette = 'accent';
}
