import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chips-highlighted',
  templateUrl: './chips-highlighted.component.html',
})
export class ChipsHighlightedComponent {
  showSelected(e): void {
    console.log(e)
  }
}
