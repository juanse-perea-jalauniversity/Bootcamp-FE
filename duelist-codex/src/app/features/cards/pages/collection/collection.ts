import { Component, effect, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardsService } from '../../data/cards-service';
import { CollectionService } from '../../data/collection-service';
import { ProfileService } from '../../data/profile-service';
import { CardSlot } from '../../components/card-slot/card-slot';
import { Card } from '../../data/card.model';

@Component({
  selector: 'collection',
  imports: [CardSlot, RouterLink],
  templateUrl: './collection.html',
  styleUrl: './collection.css',
})
export class Collection {
  readonly #cardsService = inject(CardsService);
  readonly #collection = inject(CollectionService);
  readonly #profile = inject(ProfileService);

  readonly username = this.#profile.username;
  readonly cards = signal<Card[]>([]);
  readonly loading = signal(true);

  constructor() {
    effect((onCleanup) => {
      const ids = this.#collection.favorites();
      this.loading.set(true);
      const sub = this.#cardsService.getCardsByIds(ids).subscribe(cards => {
        this.cards.set(cards);
        this.loading.set(false);
      });
      onCleanup(() => sub.unsubscribe());
    });
  }

  isFavorite(id: number): boolean {
    return this.#collection.isFavorite(id);
  }

  toggle(card: Card): void {
    this.#collection.toggle(card);
  }
}
