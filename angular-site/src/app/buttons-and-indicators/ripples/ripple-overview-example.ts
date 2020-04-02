import {Component} from '@angular/core';

/**
 * @title MatRipple basic usage
 */
@Component({
  selector: 'ripple-overview-example',
  templateUrl: 'ripple-overview-example.html',
  styleUrls: ['ripple-overview-example.css'],
})
export class RippleOverviewExample {
  centered = false;
  disabled = false;
  unbounded = false;

  radius: number;
  color: string;
}


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
