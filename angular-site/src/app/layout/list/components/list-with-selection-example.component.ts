import { Component } from '@angular/core';

@Component({
  selector: 'list-with-selection-example',
  templateUrl: './list-with-selection-example.component.html',
  styleUrls: ['./list-with-selection-example.component.css']
})
export class ListWithSelectionExampleComponent {
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
}
