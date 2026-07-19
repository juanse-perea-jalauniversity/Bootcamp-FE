import { Component, inject } from '@angular/core';
import { CardsService } from '../../data/cards-service';

@Component({
  selector: 'search-bar',
  imports: [],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar {
  #cardService = inject(CardsService)

  onChangeSearch(event: Event) {
    this.#cardService.setSearchTerm((event.target as HTMLInputElement).value)
  }

}
