import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BottomSheetRoutingModule } from './bottom-sheet-routing.module';
import {BottomSheetOverviewExample, BottomSheetOverviewExampleSheet} from "./bottom-sheet-overview-example";
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';


@NgModule({
  declarations: [BottomSheetOverviewExample, BottomSheetOverviewExampleSheet],
  imports: [
    CommonModule,
    BottomSheetRoutingModule,
    MatButtonModule,
    MatListModule,
    MatBottomSheetModule,
  ]
})
export class BottomSheetModule { }
