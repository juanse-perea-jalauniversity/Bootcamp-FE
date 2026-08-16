import { Component, computed, ElementRef, inject, signal } from '@angular/core';
import { CardsService } from '../../data/cards-service';
import { CARD_ATTRIBUTES, CARD_TYPES } from '../../data/filters';

@Component({
  selector: 'search-bar',
  imports: [],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
  host: {
    '(document:click)': 'onDocumentClick($event)',
    '(document:keydown.escape)': 'closeAttributePanel()',
  },
})
export class SearchBar {
  #cardService = inject(CardsService)
  readonly #el = inject<ElementRef<HTMLElement>>(ElementRef)

  protected readonly types = CARD_TYPES;
  protected readonly attributes = CARD_ATTRIBUTES;

  protected readonly searchValue = this.#cardService.searchValue;
  protected readonly typeFilter = this.#cardService.typeFilter;
  protected readonly attributeFilters = this.#cardService.attributeFilters;
  protected readonly hasActiveCriteria = this.#cardService.hasActiveCriteria;

  protected readonly attributePanelOpen = signal(false);

  protected readonly attributeLabel = computed(() => {
    const selected = this.attributeFilters();

    if (selected.length === 0) {
      return 'All attributes';
    }

    return selected.length === 1 ? selected[0] : `${selected.length} attributes`;
  });

  isAttributeSelected(attribute: string): boolean {
    return this.attributeFilters().includes(attribute)
  }

  onChangeSearch(event: Event) {
    this.#cardService.setSearchTerm((event.target as HTMLInputElement).value)
  }

  onChangeType(event: Event) {
    this.#cardService.setTypeFilter((event.target as HTMLSelectElement).value)
  }

  onToggleAttribute(attribute: string) {
    this.#cardService.toggleAttributeFilter(attribute)
  }

  toggleAttributePanel() {
    this.attributePanelOpen.update(open => !open)
  }

  closeAttributePanel() {
    this.attributePanelOpen.set(false)
  }

  onDocumentClick(event: MouseEvent) {
    if (!this.#el.nativeElement.contains(event.target as Node)) {
      this.closeAttributePanel()
    }
  }

  onClearCriteria() {
    this.#cardService.clearCriteria()
    this.closeAttributePanel()
  }
}
