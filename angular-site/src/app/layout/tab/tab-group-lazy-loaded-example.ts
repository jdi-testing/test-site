import {Component} from '@angular/core';

/**
 * @title Tab group where the tab content is loaded lazily (when activated)
 */
@Component({
  selector: 'tab-group-lazy-loaded-example',
  templateUrl: 'tab-group-lazy-loaded-example.html',
  styleUrls: ['tab-group-lazy-loaded-example.css'],
})
export class TabGroupLazyLoadedExample {
  tabLoadTimes: Date[] = [];

  getTimeLoaded(index: number) {
    if (!this.tabLoadTimes[index]) {
      this.tabLoadTimes[index] = new Date();
    }

    return this.tabLoadTimes[index];
  }
}


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
