import { Component, inject } from '@angular/core';
import { CardDetailView } from '../card-detail-view/card-detail-view';
import { CardsService } from '../../data/cards-service';

@Component({
  selector: 'card-detail-modal',
  imports: [CardDetailView],
  templateUrl: './card-detail-modal.html',
  styleUrl: './card-detail-modal.css',
})
export class CardDetailModal {
  readonly #cardService = inject(CardsService);
  readonly card = this.#cardService.selectedCard;

  onClose(): void {
    this.#cardService.closeModal();
  }
}
