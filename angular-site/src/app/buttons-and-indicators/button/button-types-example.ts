import {Component} from '@angular/core';

/**
 * @title Button varieties
 */
@Component({
  selector: 'button-types-example',
  templateUrl: 'button-types-example.html',
  styleUrls: ['button-types-example.css'],
})

export class ButtonTypesExample {
  basicBtnClicked : string;
  raisedBtnClicked : string;
  strokedBtnClicked : string;
  flatBtnClicked : string;
  iconBtnClicked : string;
  fabBtnClicked : string;
  miniFabBtnClicked : string;
}
