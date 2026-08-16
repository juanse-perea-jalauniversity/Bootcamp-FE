import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Card } from '../../data/card.model';
import { CardsService } from '../../data/cards-service';
import { CollectionService } from '../../data/collection-service';
import { CardSlot } from "../card-slot/card-slot";
import { Pagination } from "../../../../shared/components/pagination/pagination";
import { FeaturedCard } from "../../directives/featured-card";

@Component({
  selector: 'card-grid',
  imports: [CardSlot, Pagination, RouterLink, FeaturedCard],
  templateUrl: './card-grid.html',
  styleUrl: './card-grid.css',
})
export class CardGrid {
  readonly #cardService = inject(CardsService)
  protected readonly collection = inject(CollectionService)

  readonly cards = this.#cardService.cards;
  readonly totalPages = this.#cardService.totalPages;
  readonly loading = this.#cardService.loading;
  readonly error = this.#cardService.error;
  readonly currentPage = this.#cardService.currentPage;

  isFocused(id: number): boolean {
    return this.#cardService.isFocused(id);
  }

  onFocusToggle(card: Card): void {
    this.#cardService.toggleFocusedCard(card);
  }

  onPageChange(page: number): void {
    this.#cardService.goToPage(page);
  }

  onRetry(): void {
    this.#cardService.reload();
  }
}
