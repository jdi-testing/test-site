import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BadgeOverviewExample} from './badge-overview-example';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {BadgeRoutingModule} from './badge-routing.module';

@NgModule({
  declarations: [
    BadgeOverviewExample
  ],
  imports: [
    CommonModule,
    MatBadgeModule,
    MatButtonModule,
    MatIconModule,
    BadgeRoutingModule
  ]
})
export class BadgeModule { }
