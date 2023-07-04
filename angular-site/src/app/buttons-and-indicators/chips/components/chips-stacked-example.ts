import {Component} from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {availableColorsConfig} from "../chips-config";

/**
 * @title Stacked chips
 */
@Component({
  selector: 'chips-stacked-example',
  templateUrl: 'chips-stacked-example.html',
  styleUrls: ['chips-stacked-example.css'],
})
export class ChipsStackedExample {
  readonly availableColors = availableColorsConfig;
  clickedStackedChip?: string;
}
