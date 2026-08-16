import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardsService } from '../../data/cards-service';
import { CollectionService } from '../../data/collection-service';
import { Card } from '../../data/card.model';

@Component({
  selector: 'focus-panel',
  imports: [RouterLink],
  templateUrl: './focus-panel.html',
  styleUrl: './focus-panel.css',
})
export class FocusPanel {
  readonly #cardService = inject(CardsService)
  protected readonly collection = inject(CollectionService)

  protected readonly focusedCard = this.#cardService.focusedCard;

  onAddToCollection(card: Card): void {
    this.collection.toggle(card)
  }

  onClear(): void {
    this.#cardService.clearFocusedCard()
  }
}
