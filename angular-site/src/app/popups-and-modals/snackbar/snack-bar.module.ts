import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SnackBarRoutingModule } from './snack-bar-routing.module';
import { SnackBarComponent } from './snack-bar.component';
import {SnackBarOverviewExample} from './components/snack-bar-overview-example';
import {SnackBarComponentExample} from './components/snack-bar-component-example';
import {MatLegacyFormFieldModule as MatFormFieldModule} from '@angular/material/legacy-form-field';
import {MatLegacyInputModule as MatInputModule} from '@angular/material/legacy-input';
import {MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button';
import {FormsModule} from '@angular/forms';
import {MatLegacySnackBarModule as MatSnackBarModule} from '@angular/material/legacy-snack-bar';


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
