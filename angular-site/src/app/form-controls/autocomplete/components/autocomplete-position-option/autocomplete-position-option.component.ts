import { Component } from "@angular/core";
import { UntypedFormControl } from "@angular/forms";

@Component({
  selector: 'app-autocomplete-position-option',
  templateUrl: './autocomplete-position-option.component.html'
})
export class AutocompletePositionOptionComponent {
  myControl = new UntypedFormControl();
}
