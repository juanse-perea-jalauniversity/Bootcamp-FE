import { Component, inject } from '@angular/core';
import { CardsService } from '../services/card-service/cards-service';
import { CardSlot } from "../card-slot/card-slot";
import { Pagination } from "../pagination/pagination";

@Component({
  selector: 'card-grid',
  imports: [CardSlot, Pagination],
  templateUrl: './card-grid.html',
  styleUrl: './card-grid.css',
})
export class CardGrid {
  readonly #cardService = inject(CardsService)

  readonly cards = this.#cardService.cards;
  readonly totalPages = this.#cardService.totalPages;
  readonly loading = this.#cardService.loading;
  readonly currentPage = this.#cardService.currentPage;

  onPageChange(page: number): void {
    this.#cardService.goToPage(page);
  }

  onCardClick(card: Card): void {
    this.#cardService.selectCard(card);
  }
}
