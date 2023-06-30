import { Component } from '@angular/core';
import {availableColorsConfig} from "../../chips-config";

@Component({
  selector: 'app-chips-disable-ripple',
  templateUrl: './chips-disable-ripple.component.html',
})
export class ChipsDisableRippleComponent {
  readonly availableColors = availableColorsConfig;
}
