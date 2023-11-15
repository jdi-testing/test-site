import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'stepper-label-position-bottom-example',
  templateUrl: './stepper-label-position-bottom-example.component.html',
  styleUrls: ['./stepper-label-position-bottom-example.component.css']
})
export class StepperLabelPositionBottomExampleComponent {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder) {}
}
