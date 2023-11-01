import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CardRoutingModule } from "./card-routing.module";
import { CardComponent } from "./card.component";
import { CardFancyExample } from "./components/card-fancy-example";
import { CardOverviewExample } from "./components/card-overview-example";
import { MatCardModule } from "@angular/material/card";
import { CardWithAlignmentComponent } from "./components/card-with-alignment.component";
import { CardFooterComponent } from "./components/card-footer.component";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { CardWithMediaSizeComponent } from './components/card-with-media-size.component';

@NgModule({
  declarations: [
    CardComponent,
    CardFancyExample,
    CardOverviewExample,
    CardWithAlignmentComponent,
    CardFooterComponent,
    CardWithMediaSizeComponent,
  ],
  imports: [
    CommonModule,
    CardRoutingModule,
    MatCardModule,
    MatProgressBarModule,
    MatButtonModule,
    MatDividerModule,
  ],
})
export class CardModule {}
