import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginatorRoutingModule } from './paginator-routing.module';
import {PaginatorConfigurableExample} from './paginator-configurable-example';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from "@angular/material/input";


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
