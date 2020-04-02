import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

/**
 * @title Input with error messages
 */
@Component({
  selector: 'input-errors-example',
  templateUrl: 'input-errors-example.html',
  styleUrls: ['input-errors-example.css'],
})
export class InputErrorsExample {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
}


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
