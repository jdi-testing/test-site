import {Component, Input} from '@angular/core';

/**
 * @title Menu with icons
 */
@Component({
  selector: 'menu-icons-example',
  templateUrl: 'menu-icons-example.html',
  styleUrls: ['menu-icons-example.css'],
})
export class MenuIconsExample {
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
