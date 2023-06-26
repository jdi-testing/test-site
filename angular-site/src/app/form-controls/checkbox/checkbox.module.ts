import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckboxRoutingModule } from './checkbox-routing.module';
import { CheckboxComponent } from './checkbox.component';
import {CheckboxConfigurableExample} from './components/checkbox-configurable-example';
import {CheckboxOverviewExample} from './components/checkbox-overview-example';
import {MatLegacyCardModule as MatCardModule} from '@angular/material/legacy-card';
import {MatLegacyCheckboxModule as MatCheckboxModule} from '@angular/material/legacy-checkbox';
import {MatLegacyRadioModule as MatRadioModule} from '@angular/material/legacy-radio';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [CheckboxComponent, CheckboxConfigurableExample, CheckboxOverviewExample],
  imports: [
    CommonModule,
    CheckboxRoutingModule,
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule,
    FormsModule,
  ]
})
export class CheckboxModule { }
