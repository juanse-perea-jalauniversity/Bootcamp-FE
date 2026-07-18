import { Component, inject, signal } from '@angular/core';
import { CardsService } from '../services/card-service/cards-service';
import { Tabs } from '../tabs/tabs';

@Component({
  selector: 'card-detail-modal',
  imports: [Tabs],
  templateUrl: './card-detail-modal.html',
  styleUrl: './card-detail-modal.css',
})
export class CardDetailModal {
  readonly #cardService = inject(CardsService);
  readonly card = this.#cardService.selectedCard;
  readonly activeTab = signal('Effect');

  onClose(): void {
    this.#cardService.closeModal();
  }
}
