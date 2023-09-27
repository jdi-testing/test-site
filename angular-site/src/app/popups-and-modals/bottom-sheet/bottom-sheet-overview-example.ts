import { Direction } from '@angular/cdk/bidi';
import {Component} from '@angular/core';
import {AutoFocusTarget, MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';

/**
 * @title Bottom Sheet Overview
 */
@Component({
  selector: 'bottom-sheet-overview-example',
  templateUrl: 'bottom-sheet-overview-example.html',
  styleUrls: ['bottom-sheet-overview-example.css'],
})
export class BottomSheetOverviewExample {
  autoFocus: AutoFocusTarget | string | boolean  = 'dialog';
  customAutoFocus: string = '';
  closeOnNavigation = false;
  restoreFocus = false;
  direction: Direction = 'ltr';

  constructor(private _bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetOverviewExampleSheet, {
      autoFocus: this.customAutoFocus || (this.autoFocus !== 'false' || this.autoFocus !== null ? this.autoFocus : false),
      closeOnNavigation: this.closeOnNavigation,
      restoreFocus: this.restoreFocus,
      direction: this.direction
    });
  }

  clearAutofocusRadio(): void {
    this.autoFocus = null!;
  }

  clearCustomAutoFocus(): void {
    this.customAutoFocus = '';
  }
}

@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  templateUrl: 'bottom-sheet-overview-example-sheet.html',
})
export class BottomSheetOverviewExampleSheet {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
