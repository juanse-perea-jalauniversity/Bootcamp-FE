import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardsService } from '../../data/cards-service';
import { CardSlot } from "../card-slot/card-slot";
import { Pagination } from "../../../../shared/components/pagination/pagination";

@Component({
  selector: 'card-grid',
  imports: [CardSlot, Pagination, RouterLink],
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
}
