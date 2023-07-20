import { Component } from "@angular/core";
import { UntypedFormControl } from "@angular/forms";

@Component({
  selector: 'app-autocomplete-panel-width-option',
  templateUrl: './autocomplete-panel-width-option.html'
})
export class AutocompletePanelWidthOptionComponent {
  myControl = new UntypedFormControl();
}
