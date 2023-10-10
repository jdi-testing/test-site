import {Component, Input} from '@angular/core';

/**
 * @title Basic menu
 */
@Component({
  selector: 'menu-overview-example',
  templateUrl: 'menu-overview-example.html',
  styleUrls: ['menu-overview-example.css'],
})
export class MenuOverviewExample {
  @Input()
  disableRipple: boolean = false;
  @Input()
  overlapTrigger: boolean = false;
  @Input()
  menuPositionX: boolean = false;
  @Input()
  menuPositionY: boolean = false;

  menuOptionSelected = '';
}
