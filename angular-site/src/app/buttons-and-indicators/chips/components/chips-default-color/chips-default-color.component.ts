import { Component } from '@angular/core';

@Component({
  selector: 'app-chips-default-color',
  templateUrl: './chips-default-color.component.html',
})
export class ChipsDefaultColorComponent {
  defaultColors = ['Primary', 'Accent', 'Warn', undefined]
}
