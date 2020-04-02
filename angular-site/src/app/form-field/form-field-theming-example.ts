import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

/** @title Form field theming */
@Component({
  selector: 'form-field-theming-example',
  templateUrl: 'form-field-theming-example.html',
  styleUrls: ['form-field-theming-example.css'],
})
export class FormFieldThemingExample {
  options: FormGroup;
  colorControl = new FormControl('primary');
  fontSizeControl = new FormControl(16, Validators.min(10));

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      color: this.colorControl,
      fontSize: this.fontSizeControl,
    });
  }

  getFontSize() {
    return Math.max(10, this.fontSizeControl.value);
  }
}


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
