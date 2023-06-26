import { Component } from '@angular/core';
import {Topping} from '../chips-with-form-control/chips-with-form-control.component';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-chips-drag-and-drop',
  templateUrl: './chips-drag-and-drop.component.html',
  styleUrls: ['./chips-drag-and-drop.component.css']
})
export class ChipsDragAndDropComponent {
  toppings = ['Value_0', 'Value_1', 'Value_2', 'Value_3', 'Value_4'];

  onToppingRemoved(topping: string) {
    const toppings = this.toppings;
    this.removeFirst(toppings, topping);
  }

  private removeFirst<T>(array: T[], toRemove: T): void {
    const index = array.indexOf(toRemove);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }

  drop(event: CdkDragDrop<Topping[]>) {
    moveItemInArray(this.toppings, event.previousIndex, event.currentIndex);
  }
}
