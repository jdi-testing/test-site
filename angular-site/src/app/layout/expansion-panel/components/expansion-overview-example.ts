import {Component, QueryList, ViewChild, ViewChildren} from '@angular/core';
import { MatAccordion, MatExpansionPanel } from '@angular/material/expansion';

/**
 * @title Basic expansion panel
 */
@Component({
  selector: 'expansion-overview-example',
  templateUrl: 'expansion-overview-example.html',
  styleUrls: ['expansion-overview-example.css'],
})
export class ExpansionOverviewExample {
  @ViewChild(MatAccordion)
  accordion: MatAccordion | undefined;

  @ViewChildren(MatExpansionPanel)
  panelList: QueryList<MatExpansionPanel> | undefined;

  panelOpenState = false;

  multi: boolean = false;
  disable: boolean = false;
  hideToggle: boolean = false;
  togglePosition: boolean = true;
  individualTogglePosition: boolean = false;

  onIndividualPositionChange(): void {
    if(this.individualTogglePosition) {
      this.panelList!.first.togglePosition = 'before'
      this.panelList!.last.togglePosition = 'after'
    } else {
      this.panelList!.first.togglePosition = undefined as any
      this.panelList!.last.togglePosition = undefined as any
   }
  }
}
