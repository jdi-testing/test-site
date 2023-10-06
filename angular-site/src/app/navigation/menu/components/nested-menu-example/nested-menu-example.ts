import {Component, Input} from '@angular/core';

/**
 * @title Nested menu
 */
@Component({
  selector: 'nested-menu-example',
  templateUrl: 'nested-menu-example.html',
  styleUrls: ['nested-menu-example.css'],
})
export class NestedMenuExample {
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
