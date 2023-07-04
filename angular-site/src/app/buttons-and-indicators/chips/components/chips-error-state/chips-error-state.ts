import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, ViewChild} from '@angular/core';
import {MatChipEditedEvent, MatChipInputEvent} from '@angular/material/chips';
import {FormControl, NonNullableFormBuilder, Validators} from "@angular/forms";

export interface Fruit {
  name: string;
}

/**
 * @title Chips with input
 */
@Component({
  selector: 'app-chips-error-state',
  templateUrl: 'chips-error-state.html',
  styleUrls: ['chips-error-state.css'],
})
export class ChipsErrorState {
  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;

  // Enter, comma
  separatorKeysCodes = [ENTER, COMMA];

  @ViewChild('chipList') chipList: any;

  fruits = [{ name: 'Lemon' }, { name: 'Lime' }, { name: 'Apple' }];

  add(event: MatChipInputEvent): void {
    let input = event.input;
    let value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    if (this.fruits.length > 3) {
      this.chipList.errorState = true;
    }
  }

  remove(fruit: any): void {
    let index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }

    if (this.fruits.length <= 3) {
      this.chipList.errorState = false;
    }
  }

  setError() {

    this.chipList.errorState =  true;
  }
}

