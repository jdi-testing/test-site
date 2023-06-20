import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginatorRoutingModule } from './paginator-routing.module';
import {PaginatorConfigurableExample} from './paginator-configurable-example';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [PaginatorConfigurableExample],
  imports: [
    CommonModule,
    PaginatorRoutingModule,
    MatFormFieldModule,
    FormsModule,
    MatPaginatorModule
  ]
})
export class PaginatorModule { }
