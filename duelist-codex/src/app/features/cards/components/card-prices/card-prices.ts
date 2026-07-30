import { Component, input } from '@angular/core';
import { Card } from '../../data/card.model';
import { CardPricePipe } from '../../../../pipes/card-price-pipe';

@Component({
  selector: 'card-prices',
  imports: [CardPricePipe],
  templateUrl: './card-prices.html',
  styleUrl: './card-prices.css',
})
export class CardPrices {
  readonly card = input.required<Card>();
}
