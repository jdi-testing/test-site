import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './panel-routing.module';
import { PanelComponent } from './panel.component';
import {ExpansionStepsExample} from './components/expansion-steps-example';
import {ExpansionOverviewExample} from './components/expansion-overview-example';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';


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
    MatInputModule
  ]
})
export class PanelModule { }
