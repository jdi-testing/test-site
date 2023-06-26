import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginatorRoutingModule } from './paginator-routing.module';
import {PaginatorConfigurableExample} from './paginator-configurable-example';
import {MatLegacyFormFieldModule as MatFormFieldModule} from '@angular/material/legacy-form-field';
import {FormsModule} from '@angular/forms';
import {MatLegacyPaginatorModule as MatPaginatorModule} from '@angular/material/legacy-paginator';
import {MatLegacyInputModule as MatInputModule} from "@angular/material/legacy-input";


@NgModule({
  declarations: [PaginatorConfigurableExample],
  imports: [
    CommonModule,
    PaginatorRoutingModule,
    MatFormFieldModule,
    FormsModule,
    MatPaginatorModule,
    MatInputModule
  ]
})
export class PaginatorModule { }
