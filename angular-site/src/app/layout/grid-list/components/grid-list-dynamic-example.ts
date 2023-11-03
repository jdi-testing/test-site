import { Component } from "@angular/core";

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  hasAvatar: boolean;
  hasHeaderAndFooter: boolean;
}

/**
 * @title Dynamic grid-list
 */
@Component({
  selector: "grid-list-dynamic-example",
  templateUrl: "grid-list-dynamic-example.html",
  styleUrls: ["grid-list-dynamic-example.css"],
})
export class GridListDynamicExample {
  tiles: Tile[] = [
    {
      text: "One",
      cols: 3,
      rows: 1,
      color: "lightblue",
      hasAvatar: false,
      hasHeaderAndFooter: false,
    },
    {
      text: "Two",
      cols: 1,
      rows: 2,
      color: "lightgreen",
      hasAvatar: true,
      hasHeaderAndFooter: false,
    },
    {
      text: "Three",
      cols: 1,
      rows: 1,
      color: "lightpink",
      hasAvatar: false,
      hasHeaderAndFooter: true,
    },
    {
      text: "Four",
      cols: 2,
      rows: 1,
      color: "#DDBDF1",
      hasAvatar: false,
      hasHeaderAndFooter: false,
    },
  ];
}
