import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconsRoutingModule } from './icons-routing.module';
import { IconsComponent } from './icons.component';
import {IconOverviewExample} from './components/icon-overview-example';
import {IconSvgExample} from './components/icon-svg-example';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [IconsComponent, IconOverviewExample, IconSvgExample],
  imports: [
    CommonModule,
    IconsRoutingModule,
    MatIconModule
  ]
})
export class IconsModule { }
