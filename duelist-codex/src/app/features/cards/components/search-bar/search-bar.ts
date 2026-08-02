import { Component, inject } from '@angular/core';
import { CardsService } from '../../data/cards-service';
import { CARD_ATTRIBUTES, CARD_TYPES } from '../../data/filters';

@Component({
  selector: 'search-bar',
  imports: [],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar {
  #cardService = inject(CardsService)

  protected readonly types = CARD_TYPES;
  protected readonly attributes = CARD_ATTRIBUTES;

  protected readonly searchValue = this.#cardService.searchValue;
  protected readonly typeFilter = this.#cardService.typeFilter;
  protected readonly attributeFilter = this.#cardService.attributeFilter;
  protected readonly hasActiveCriteria = this.#cardService.hasActiveCriteria;

  onChangeSearch(event: Event) {
    this.#cardService.setSearchTerm((event.target as HTMLInputElement).value)
  }

  onChangeType(event: Event) {
    this.#cardService.setTypeFilter((event.target as HTMLSelectElement).value)
  }

  onChangeAttribute(event: Event) {
    this.#cardService.setAttributeFilter((event.target as HTMLSelectElement).value)
  }

  onClearCriteria() {
    this.#cardService.clearCriteria()
  }
}
