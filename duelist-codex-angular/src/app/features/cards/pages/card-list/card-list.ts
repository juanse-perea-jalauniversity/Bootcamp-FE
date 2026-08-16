import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardGrid } from "../../components/card-grid/card-grid";
import { SearchBar } from '../../components/search-bar/search-bar';
import { FocusPanel } from '../../components/focus-panel/focus-panel';

@Component({
  selector: 'card-list',
  imports: [CardGrid, SearchBar, RouterLink, FocusPanel],
  templateUrl: './card-list.html',
  styleUrl: './card-list.css',
})
export class CardList { }
