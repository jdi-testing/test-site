import { Component, OnInit } from '@angular/core';
import {availableColorsConfig} from "../../chips-config";

@Component({
  selector: 'app-chips-highlighted',
  templateUrl: './chips-highlighted.component.html',
})
export class ChipsHighlightedComponent {
  showSelected(e: any): void {
    console.log(e)
  }
  readonly availableColors = availableColorsConfig;
}
