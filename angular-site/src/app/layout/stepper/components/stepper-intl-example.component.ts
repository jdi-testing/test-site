import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatStepperIntl } from '@angular/material/stepper';

@Component({
  selector: 'stepper-intl-example',
  templateUrl: './stepper-intl-example.component.html',
  styleUrls: ['./stepper-intl-example.component.css'],
  providers: [{provide: MatStepperIntl, useClass: MatStepperIntl}],
})
export class StepperIntlExampleComponent {
  optionalLabelText: any;
  optionalLabelTextChoices: string[] = ['Option 1', 'Option 2', 'Option 3'];
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder, private _matStepperIntl: MatStepperIntl) {}

  updateOptionalLabel() {
    this._matStepperIntl.optionalLabel = this.optionalLabelText;
    // Required for the optional label text to be updated
    // Notifies the MatStepperIntl service that a change has been made
    this._matStepperIntl.changes.next();
  }
}
