import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonsRoutingModule } from './buttons-routing.module';
import {ButtonTypesExample} from './button-types-example';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";


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
