import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './panel-routing.module';
import { PanelComponent } from './panel.component';
import {ExpansionStepsExample} from './components/expansion-steps-example';
import {ExpansionOverviewExample} from './components/expansion-overview-example';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatNativeDateModule} from '@angular/material/core';


@NgModule({
  declarations: [PanelComponent, ExpansionOverviewExample, ExpansionStepsExample],
  imports: [
    CommonModule,
    PanelRoutingModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatDatepickerModule,
    MatButtonModule,
    MatInputModule,
    MatNativeDateModule
  ]
})
export class PanelModule { }
