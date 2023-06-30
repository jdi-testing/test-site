import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardRoutingModule } from './card-routing.module';
import {CardComponent} from './card.component';
import {CardFancyExample} from './components/card-fancy-example';
import {CardOverviewExample} from './components/card-overview-example';
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [CardComponent, CardFancyExample, CardOverviewExample],
  imports: [
    CommonModule,
    CardRoutingModule,
    MatCardModule
  ]
})
export class CardModule { }
