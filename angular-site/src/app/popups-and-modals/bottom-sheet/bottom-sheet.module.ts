import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BottomSheetRoutingModule } from './bottom-sheet-routing.module';
import {BottomSheetOverviewExample, BottomSheetOverviewExampleSheet} from "./bottom-sheet-overview-example";
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";


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
