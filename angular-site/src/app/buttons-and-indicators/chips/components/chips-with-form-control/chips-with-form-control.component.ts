import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatChipInputEvent} from '@angular/material/chips';
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";

export interface Topping {
  name: string;
}

@Component({
  selector: 'app-chips-with-form-control',
  templateUrl: './chips-with-form-control.component.html',
  styleUrls: ['./chips-with-form-control.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChipsWithFormControlComponent {
  keywords = ['angular', 'how-to', 'tutorial', 'accessibility'];
  formControl = new FormControl(['angular']);

  removeKeyword(keyword: string): void {
    const index = this.keywords.indexOf(keyword);
    if (index >= 0) {
      this.keywords.splice(index, 1);
    }
  }

  add(event: MatChipInputEvent): void {

    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.keywords.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
      console.log(this.formControl)
    }
  }

}
