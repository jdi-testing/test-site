import { Component, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-radio-buttons-ripple-disabled',
  templateUrl: './radio-buttons-ripple-disabled.component.html',
})
export class RadioButtonsRippleDisabledComponent {
  @Input()
  colorTheme: ThemePalette
}
