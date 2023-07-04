import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatChipInputEvent} from '@angular/material/chips';

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

  removeKeyword(keyword: string) {
    const index = this.keywords.indexOf(keyword);
    if (index >= 0) {
      this.keywords.splice(index, 1);
    }
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our keyword
    if (value) {
      this.keywords.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

}
