import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'stepper-animations-example',
  templateUrl: './stepper-animations-example.component.html',
  styleUrls: ['./stepper-animations-example.component.css']
})
export class StepperAnimationsExampleComponent {
  constructor(private _formBuilder: FormBuilder) {}
  firstFormGroup: FormGroup = this._formBuilder.group({firstCtrl: ['']});
  secondFormGroup: FormGroup = this._formBuilder.group({secondCtrl: ['']});
}
