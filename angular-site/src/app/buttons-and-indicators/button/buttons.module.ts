import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonsRoutingModule } from './buttons-routing.module';
import {ButtonTypesExample} from './button-types-example';
import {MatLegacyButtonModule as MatButtonModule} from "@angular/material/legacy-button";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [ButtonTypesExample],
  imports: [
    CommonModule,
    ButtonsRoutingModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class ButtonsModule { }
