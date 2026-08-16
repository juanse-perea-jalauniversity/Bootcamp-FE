import { Component, input } from '@angular/core';
import { CardSet } from '../../data/card.model';
import { CardPricePipe } from '../../../../pipes/card-price-pipe';

@Component({
  selector: 'card-printings',
  imports: [CardPricePipe],
  templateUrl: './card-printings.html',
  styleUrl: './card-printings.css',
})
export class CardPrintings {
  readonly printings = input.required<CardSet[]>();
}
