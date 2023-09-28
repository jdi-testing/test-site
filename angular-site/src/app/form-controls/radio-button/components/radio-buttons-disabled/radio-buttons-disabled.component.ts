import { Component, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-radio-buttons-disabled',
  templateUrl: './radio-buttons-disabled.component.html'
})
export class RadioButtonsDisabledComponent {
  @Input()
  colorTheme: ThemePalette

  isDisabled = true;
  toggleTwoAndThreeDisable(): void {
    this.isDisabled = !this.isDisabled;
    console.log(this.isDisabled)
  }
}
