import { Component } from '@angular/core';
import {Topping} from '../chips-with-form-control/chips-with-form-control.component';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

export interface Vegetable {
  name: string;
}

@Component({
  selector: 'app-chips-drag-and-drop',
  templateUrl: './chips-drag-and-drop.component.html',
  styleUrls: ['./chips-drag-and-drop.component.css']
})
export class ChipsDragAndDropComponent {
  vegetables: Vegetable[] = [
    {name: 'apple'},
    {name: 'banana'},
    {name: 'strawberry'},
    {name: 'orange'},
    {name: 'kiwi'},
    {name: 'cherry'},
  ];

  drop(event: CdkDragDrop<Vegetable[]>) {
    moveItemInArray(this.vegetables, event.previousIndex, event.currentIndex);
  }
}
