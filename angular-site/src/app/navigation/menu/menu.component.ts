import { Component } from "@angular/core";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ['menu.component.css'],
})
export class MenuComponent {
  disableRipple: boolean = false;
  overlapTrigger: boolean = false;
  menuPositionX: boolean = false;
  menuPositionY: boolean = false;
}


export declare type MenuPositionX = 'before' | 'after';

export declare type MenuPositionY = 'above' | 'below';
