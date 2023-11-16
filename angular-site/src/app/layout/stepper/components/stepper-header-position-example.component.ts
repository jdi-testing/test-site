import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'stepper-header-position-example',
  templateUrl: './stepper-header-position-example.component.html',
  styleUrls: ['./stepper-header-position-example.component.css']
})
export class StepperHeaderPositionExampleComponent {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder) {}
}
