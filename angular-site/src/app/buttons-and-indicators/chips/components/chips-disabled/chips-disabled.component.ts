import { Component } from '@angular/core';
import {availableColorsConfig} from "../../chips-config";

@Component({
  selector: 'app-chips-disabled',
  templateUrl: './chips-disabled.component.html',
})
export class ChipsDisabledComponent {
  readonly availableColors = availableColorsConfig;
}
