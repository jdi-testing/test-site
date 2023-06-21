import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SnackBarRoutingModule } from './snack-bar-routing.module';
import { SnackBarComponent } from './snack-bar.component';
import {SnackBarOverviewExample} from './components/snack-bar-overview-example';
import {SnackBarComponentExample} from './components/snack-bar-component-example';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [SnackBarComponent, SnackBarOverviewExample, SnackBarComponentExample],
  imports: [
    CommonModule,
    SnackBarRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatSnackBarModule
  ]
})
export class SnackBarModule { }
