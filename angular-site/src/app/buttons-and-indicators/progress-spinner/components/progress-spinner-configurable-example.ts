import {Component} from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {LegacyProgressSpinnerMode as ProgressSpinnerMode} from '@angular/material/legacy-progress-spinner';

/**
 * @title Configurable progress spinner
 */
@Component({
  selector: 'progress-spinner-configurable-example',
  templateUrl: 'progress-spinner-configurable-example.html',
  styleUrls: ['progress-spinner-configurable-example.css'],
})
export class ProgressSpinnerConfigurableExample {
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;
}
