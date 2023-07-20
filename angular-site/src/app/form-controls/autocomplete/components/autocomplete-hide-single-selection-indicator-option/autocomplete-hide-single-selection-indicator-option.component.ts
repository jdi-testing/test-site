import { Component } from "@angular/core";
import { UntypedFormControl } from "@angular/forms";

@Component({
  selector: 'app-autocomplete-hide-single-selection-indicator-option',
  templateUrl: './autocomplete-hide-single-selection-indicator-option.component.html'
})
export class AutocompleteHideSingleSelectionIndicatorOptionComponent {
  myControl = new UntypedFormControl();
}
