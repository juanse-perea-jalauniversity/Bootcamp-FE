import { Component } from '@angular/core';
import { CardGrid } from "../card-grid/card-grid";
import { SearchBar } from "../search-bar/search-bar";

@Component({
  selector: 'layout',
  imports: [CardGrid, SearchBar],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout { }
