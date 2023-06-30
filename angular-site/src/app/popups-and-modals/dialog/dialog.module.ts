import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogRoutingModule } from './dialog-routing.module';
import {DialogOverviewExample, DialogOverviewExampleDialog} from './dialog-overview-example';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";


@NgModule({
  declarations: [DialogOverviewExample, DialogOverviewExampleDialog],
  imports: [
    CommonModule,
    DialogRoutingModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
  ]
})
export class DialogModule { }
