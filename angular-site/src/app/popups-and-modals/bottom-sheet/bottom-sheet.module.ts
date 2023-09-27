import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BottomSheetRoutingModule } from './bottom-sheet-routing.module';
import {BottomSheetOverviewExample, BottomSheetOverviewExampleSheet} from "./bottom-sheet-overview-example";
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';


@NgModule({
  declarations: [BottomSheetOverviewExample, BottomSheetOverviewExampleSheet],
  imports: [
    CommonModule,
    BottomSheetRoutingModule,
    MatCardModule,
    FormsModule,
    MatRadioModule,
    MatCheckboxModule,
    MatButtonModule,
    MatListModule,
    MatBottomSheetModule,
  ]
})
export class BottomSheetModule { }
