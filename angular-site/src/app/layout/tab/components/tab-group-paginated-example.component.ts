import { Component } from '@angular/core';

@Component({
  selector: 'tab-group-paginated-example',
  templateUrl: './tab-group-paginated-example.component.html',
  styleUrls: ['./tab-group-paginated-example.component.css']
})
export class TabGroupPaginatedExampleComponent {
  lotsOfTabs = new Array(10).fill(0).map((_, index) => `Tab ${index}`);
}
