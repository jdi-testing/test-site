import { Component } from '@angular/core';

@Component({
  selector: 'list-with-single-selection-example',
  templateUrl: './list-with-single-selection-example.component.html',
  styleUrls: ['./list-with-single-selection-example.component.css']
})
export class ListWithSingleSelectionExampleComponent {
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
}
