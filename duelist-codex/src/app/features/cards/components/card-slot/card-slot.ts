import { SlicePipe } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { Card } from '../../data/card.model';

@Component({
  selector: 'card-slot',
  imports: [SlicePipe],
  templateUrl: './card-slot.html',
  styleUrl: './card-slot.css',
})
export class CardSlot {
  readonly cardInfo = input.required<Card>();
  readonly isFavorite = input<boolean>(false);
  readonly favoriteToggle = output<Card>();

  onFavorite(event: Event): void {
    event.stopPropagation();
    this.favoriteToggle.emit(this.cardInfo());
  }
}
