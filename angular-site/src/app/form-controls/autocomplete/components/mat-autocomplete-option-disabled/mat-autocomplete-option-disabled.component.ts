import { Component } from "@angular/core";
import { UntypedFormControl } from "@angular/forms";

@Component({
  selector: 'app-mat-autocomplete-option-disabled',
  templateUrl: './mat-autocomplete-option-disabled.component.html'
})
export class MatAutocompleteOptionDisabledComponent {
  myControl = new UntypedFormControl();
}
