import { Component, input } from '@angular/core';
import { Card } from '../../data/card.model';

@Component({
  selector: 'card-prices',
  imports: [],
  templateUrl: './card-prices.html',
  styleUrl: './card-prices.css',
})
export class CardPrices {
  readonly card = input.required<Card>();
}
