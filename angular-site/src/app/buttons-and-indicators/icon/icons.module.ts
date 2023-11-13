import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconsRoutingModule } from './icons-routing.module';
import { IconsComponent } from './icons.component';
import {IconOverviewExample} from './components/icon-overview-example';
import {IconSvgExample} from './components/icon-svg-example';
import {MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [IconsComponent, IconOverviewExample, IconSvgExample],
  imports: [
    CommonModule,
    IconsRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule
  ]
})
export class IconsModule { }
