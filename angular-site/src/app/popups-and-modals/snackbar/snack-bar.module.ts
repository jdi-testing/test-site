import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SnackBarRoutingModule } from './snack-bar-routing.module';
import { SnackBarComponent } from './snack-bar.component';
import {SnackBarOverviewExample} from './components/snack-bar-overview-example';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {SnackBarComponentExample} from "./components/snack-bar-component-example";
import {MatButtonModule} from "@angular/material/button";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { SnackBarPositionExampleComponent } from './components/snack-bar-position-example.component';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [SnackBarComponent, SnackBarOverviewExample, SnackBarComponentExample, SnackBarPositionExampleComponent],
  imports: [
    CommonModule,
    SnackBarRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatSnackBarModule,
    MatSelectModule
  ]
})
export class SnackBarModule { }
