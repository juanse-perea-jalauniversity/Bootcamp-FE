import { Component } from '@angular/core';
import { CardGrid } from "../../components/card-grid/card-grid";
import { SearchBar } from '../../components/search-bar/search-bar';

@Component({
  selector: 'card-list',
  imports: [CardGrid, SearchBar],
  templateUrl: './card-list.html',
  styleUrl: './card-list.css',
})
export class CardList { }
