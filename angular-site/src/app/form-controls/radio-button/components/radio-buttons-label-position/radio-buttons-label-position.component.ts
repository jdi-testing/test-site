import { Component, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-radio-buttons-label-position',
  templateUrl: './radio-buttons-label-position.component.html',
})
export class RadioButtonsLabelPositionComponent {
  @Input()
  colorTheme: ThemePalette
}
