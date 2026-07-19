import { Component, effect, inject, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardDetailView } from '../../components/card-detail-view/card-detail-view';
import { CardsService } from '../../data/cards-service';
import { Card } from '../../data/card.model';

@Component({
  selector: 'card-detail',
  imports: [CardDetailView, RouterLink],
  templateUrl: './card-detail.html',
  styleUrl: './card-detail.css',
})
export class CardDetail {
  readonly id = input.required<string>();

  readonly #service = inject(CardsService);
  readonly card = signal<Card | null>(null);
  readonly loading = signal(true);

  constructor() {
    effect((onCleanup) => {
      const id = this.id();
      this.loading.set(true);
      const sub = this.#service.getCardById(id).subscribe(card => {
        this.card.set(card);
        this.loading.set(false);
      });
      onCleanup(() => sub.unsubscribe());
    });
  }
}
