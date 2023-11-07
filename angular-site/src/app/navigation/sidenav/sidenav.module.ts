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
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatRadioModule} from "@angular/material/radio";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {SidenavBackdropExampleComponent} from './components/sidenav-backdrop-example.component';
import {MatSelectModule} from '@angular/material/select';

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
    SidenavBackdropExampleComponent,
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
    MatInputModule,
    MatSelectModule
  ]
})
export class SidenavModule { }
