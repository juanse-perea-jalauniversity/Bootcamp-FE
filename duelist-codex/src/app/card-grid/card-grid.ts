import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { CardsService } from '../services/card-service/cards-service';
import { CardSlot } from "../card-slot/card-slot";
import { Pagination } from "../pagination/pagination";

const PAGE_SIZE = 12;

@Component({
  selector: 'card-grid',
  imports: [CardSlot, Pagination],
  templateUrl: './card-grid.html',
  styleUrl: './card-grid.css',
})
export class CardGrid implements OnInit {
  readonly #cardService = inject(CardsService)

  readonly allCards = signal<Card[]>([]);
  readonly currentPage = signal(1);
  readonly loading = signal(true);

  readonly cards = computed(() => {
    const start = (this.currentPage() - 1) * PAGE_SIZE;
    return this.allCards()
      .filter(card => card.name.toLowerCase().includes(this.#cardService.searchValue().toLowerCase()))
      .slice(start, start + PAGE_SIZE);
  });

  readonly totalPages = computed(() =>
    Math.max(1, Math.ceil(this.allCards().length / PAGE_SIZE)),
  );

  ngOnInit(): void {
    this.#cardService.getYuGiOhCards()
      .subscribe(res => {
        this.allCards.set(res.data ?? []);
        this.loading.set(false);
      })
  }

  onPageChange(page: number): void {
    this.currentPage.set(page);
  }
}
