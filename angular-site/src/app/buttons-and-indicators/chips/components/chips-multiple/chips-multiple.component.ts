import { Component } from '@angular/core';
import {availableColorsConfig} from "../../chips-config";



@Component({
  selector: 'app-chips-multiple',
  templateUrl: './chips-multiple.component.html',
})
export class ChipsMultipleComponent {
  readonly availableColors = availableColorsConfig;
}
