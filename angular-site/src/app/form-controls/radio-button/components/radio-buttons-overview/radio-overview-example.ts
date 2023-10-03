import {Component, Input} from '@angular/core';
import { ThemePalette } from '@angular/material/core';

/**
 * @title Basic radios
 */
@Component({
  selector: 'radio-overview-example',
  templateUrl: 'radio-overview-example.html',
  styleUrls: ['radio-overview-example.css'],
})
export class RadioOverviewExample {
  @Input()
  colorTheme: ThemePalette
}
