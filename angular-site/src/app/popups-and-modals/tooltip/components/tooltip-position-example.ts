import {Component} from '@angular/core';
import {UntypedFormControl} from '@angular/forms';
import {LegacyTooltipPosition as TooltipPosition} from '@angular/material/legacy-tooltip';

/**
 * @title Tooltip with a custom position
 */
@Component({
  selector: 'tooltip-position-example',
  templateUrl: 'tooltip-position-example.html',
  styleUrls: ['tooltip-position-example.css'],
})
export class TooltipPositionExample {
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new UntypedFormControl(this.positionOptions[0]);
}
