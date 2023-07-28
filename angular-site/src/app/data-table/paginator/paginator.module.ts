import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PaginatorRoutingModule} from './paginator-routing.module';
import {PaginatorConfigurableExample} from './components/paginator-configurable-example/paginator-configurable-example';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatPaginatorIntl, MatPaginatorModule} from "@angular/material/paginator";
import {MatInputModule} from "@angular/material/input";
import {PaginationsComponent} from './paginations.component';
import {PaginatorFirstPageLabelComponent} from './components/paginator-first-last-page-labels/paginator-first-page-label.component';
import { CustomMatPaginatorIntl } from './services/custom.paginator.service';
import { PaginatorColorThemePaletteComponent } from './components/paginator-color-themepalette/paginator-color-themepalette.component';
import { PaginatorDisabledOptionComponent } from './components/paginator-disabled-option/paginator-disabled-option.component';
import { PaginatorHidePageSizeOptionComponent } from './components/paginator-hide-page-size/paginator-hide-page-size-option.component';


@NgModule({
  declarations: [
    PaginationsComponent,
    PaginatorConfigurableExample,
    PaginatorFirstPageLabelComponent,
    PaginatorColorThemePaletteComponent,
    PaginatorDisabledOptionComponent,
    PaginatorHidePageSizeOptionComponent
  ],
  imports: [
    CommonModule,
    PaginatorRoutingModule,
    MatFormFieldModule,
    FormsModule,
    MatPaginatorModule,
    MatInputModule
  ],
  providers: [{
    provide: MatPaginatorIntl,
    useClass: CustomMatPaginatorIntl
  }]
})
export class PaginatorModule { }
