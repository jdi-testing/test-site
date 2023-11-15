import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'dialog-content-example',
  templateUrl: './dialog-content-example.component.html',
  styleUrls: ['./dialog-content-example.component.css']
})
export class DialogContentExampleComponent {
  align: string = 'start'
  autoFocus: boolean | string = false;
  closeOnNavigation: boolean = true;
  disableClose: boolean = false;
  animationDuration: number = 0;
  exitAnimationDuration: number = 0;
  height: string = '1000px'
  maxHeight: number = 1000;
  minHeight: number = 1000;
  minWidth: number = 1000;
  maxWidth: number = 1000;
  restoreFocus: boolean = false;

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog, {
      data: {
        align: this.align
      },
      autoFocus: this.autoFocus,
      closeOnNavigation: this.closeOnNavigation,
      disableClose: this.disableClose,
      enterAnimationDuration: this.animationDuration,
      exitAnimationDuration: this.exitAnimationDuration,
      height: this.height,
      maxHeight: this.maxHeight,
      minHeight: this.minHeight,
      minWidth: this.minWidth,
      maxWidth: this.maxWidth,
      restoreFocus: this.restoreFocus
           
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}