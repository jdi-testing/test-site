import { Component } from '@angular/core';

@Component({
  selector: 'app-radio-buttons-disabled',
  templateUrl: './radio-buttons-disabled.component.html'
})
export class RadioButtonsDisabledComponent {
  isDisabled = true;
  toggleTwoAndThreeDisable(): void {
    this.isDisabled = !this.isDisabled;
    console.log(this.isDisabled)
  }
}
