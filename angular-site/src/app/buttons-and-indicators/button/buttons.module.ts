import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonsRoutingModule } from './buttons-routing.module';
import {ButtonTypesExample} from './button-types-example';
import {MatButtonModule} from "@angular/material/button";
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
