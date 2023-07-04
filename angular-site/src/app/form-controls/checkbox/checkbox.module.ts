import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckboxRoutingModule } from './checkbox-routing.module';
import { CheckboxComponent } from './checkbox.component';
import {CheckboxConfigurableExample} from './components/checkbox-configurable-example';
import {CheckboxOverviewExample} from './components/checkbox-overview-example';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from "@angular/material/card";
import {MatRadioModule} from "@angular/material/radio";
import {MatCheckboxModule} from "@angular/material/checkbox";


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
