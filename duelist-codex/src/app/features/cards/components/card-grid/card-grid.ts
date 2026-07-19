import { Component, inject, OnInit } from '@angular/core';
import { CardsService } from '../../data/cards-service';
import { Card } from '../../data/card.model';
import { CardSlot } from "../card-slot/card-slot";
import { Pagination } from "../../../../shared/components/pagination/pagination";

@Component({
  selector: 'card-grid',
  imports: [CardSlot, Pagination],
  templateUrl: './card-grid.html',
  styleUrl: './card-grid.css',
})
export class CardGrid implements OnInit {
  readonly #cardService = inject(CardsService)

  readonly cards = this.#cardService.cards;
  readonly totalPages = this.#cardService.totalPages;
  readonly loading = this.#cardService.loading;
  readonly currentPage = this.#cardService.currentPage;

  ngOnInit() {
    this.#cardService.fetchCards()
  }

  onPageChange(page: number): void {
    this.#cardService.goToPage(page);
  }

  onCardClick(card: Card): void {
    this.#cardService.selectCard(card);
  }
}
