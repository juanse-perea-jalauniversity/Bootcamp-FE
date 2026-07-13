import { Component } from '@angular/core';
import { CardGrid } from "../card-grid/card-grid";
import { SearchBar } from "../search-bar/search-bar";
import { CardDetailModal } from "../card-detail-modal/card-detail-modal";

@Component({
  selector: 'layout',
  imports: [CardGrid, SearchBar, CardDetailModal],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout { }
