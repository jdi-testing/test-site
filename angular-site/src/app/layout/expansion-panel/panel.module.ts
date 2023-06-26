import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './panel-routing.module';
import { PanelComponent } from './panel.component';
import {ExpansionStepsExample} from './components/expansion-steps-example';
import {ExpansionOverviewExample} from './components/expansion-overview-example';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatLegacyFormFieldModule as MatFormFieldModule} from '@angular/material/legacy-form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button';
import {MatLegacyInputModule as MatInputModule} from '@angular/material/legacy-input';


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
