import { Component } from "@angular/core";
import { UntypedFormControl } from "@angular/forms";

@Component({
  selector: 'app-autocomplete-auto-select-active-option',
  templateUrl: './autocomplete-auto-select-active-option.component.html'
})
export class AutocompleteAutoSelectActiveOptionComponent {
  myControl = new UntypedFormControl();
}
