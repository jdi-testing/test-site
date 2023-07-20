import { Component } from "@angular/core";
import { UntypedFormControl } from "@angular/forms";
import { MAT_RIPPLE_GLOBAL_OPTIONS } from "@angular/material/core";

@Component({
  selector: 'app-autocomplete-disable-ripple',
  templateUrl: './autocomplete-disable-ripple.component.html',
  providers: [{provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: {disabled: true}},]
})
export class AutocompleteDisableRippleComponent {
  myControl = new UntypedFormControl();
  options: string[] = ['One', 'Two', 'Three'];
}
