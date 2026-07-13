import { Component, inject } from '@angular/core';
import { CardsService } from '../services/card-service/cards-service';

@Component({
  selector: 'card-detail-modal',
  imports: [],
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
