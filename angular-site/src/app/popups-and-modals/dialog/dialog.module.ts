import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DialogRoutingModule } from "./dialog-routing.module";
import {
  DialogOverviewExample,
  DialogOverviewExampleDialog,
} from "./components/dialog-overview-example";
import { FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { DialogComponent } from "./dialog.component";
import {
  DialogAnimationsExampleComponent,
  DialogAnimationsExampleDialog,
} from "./components/dialog-animations-example.component";
import {
  DialogContentExampleComponent,
  DialogContentExampleDialog,
} from "./components/dialog-content-example.component";
import {
  DialogFromMenuExampleComponent,
  DialogFromMenuExampleDialog,
} from "./components/dialog-from-menu-example.component";
import { MatMenuModule } from "@angular/material/menu";
import { MatSelectModule } from "@angular/material/select";


@NgModule({
  declarations: [
    DialogOverviewExample,
    DialogOverviewExampleDialog,
    DialogComponent,
    DialogAnimationsExampleComponent,
    DialogAnimationsExampleDialog,
    DialogContentExampleComponent,
    DialogContentExampleDialog,
    DialogFromMenuExampleComponent,
    DialogFromMenuExampleDialog,
  ],
  imports: [
    CommonModule,
    DialogRoutingModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatMenuModule,
    MatSelectModule
  ],
})
export class DialogModule {}
