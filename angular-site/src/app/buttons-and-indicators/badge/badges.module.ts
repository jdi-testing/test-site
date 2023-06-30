import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BadgeOverviewExample} from './badge-overview-example';
import {MatBadgeModule} from '@angular/material/badge';
import {MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button';
import {MatIconModule} from '@angular/material/icon';
import {BadgeRoutingModule} from './badges-routing.module';


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
export class BadgesModule { }
