import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidenavRoutingModule } from './sidenav-routing.module';
import {SidenavComponent} from './sidenav.component';
import {SidenavAutosizeExample} from './components/sidenav-autosize-example';
import {SidenavDisableCloseExample} from './components/sidenav-disable-close-example';
import {SidenavDrawerOverviewExample} from './components/sidenav-drawer-overview-example';
import {SidenavFixedExample} from './components/sidenav-fixed-example';
import {SidenavModeExample} from './components/sidenav-mode-example';
import {SidenavOpenCloseExample} from './components/sidenav-open-close-example';
import {SidenavOverviewExample} from './components/sidenav-overview-example';
import {SidenavPositionExample} from './components/sidenav-position-example';
import {SidenavResponsiveExample} from './components/sidenav-responsive-example';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    SidenavComponent,
    SidenavAutosizeExample,
    SidenavDisableCloseExample,
    SidenavDrawerOverviewExample,
    SidenavFixedExample,
    SidenavModeExample,
    SidenavOpenCloseExample,
    SidenavOverviewExample,
    SidenavPositionExample,
    SidenavResponsiveExample,
  ],
  exports: [
    SidenavAutosizeExample,
    SidenavDisableCloseExample,
    SidenavDrawerOverviewExample,
    SidenavFixedExample,
    SidenavModeExample,
    SidenavOpenCloseExample,
    SidenavOverviewExample,
    SidenavPositionExample,
    SidenavResponsiveExample
  ],
  imports: [
    CommonModule,
    SidenavRoutingModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCheckboxModule,
    FormsModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class SidenavModule { }