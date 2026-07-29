import { Component, input } from '@angular/core';
import { Card } from '../../data/card.model';

@Component({
  selector: 'card-detail-header',
  imports: [],
  templateUrl: './card-detail-header.html',
  styleUrl: './card-detail-header.css',
})
export class CardDetailHeader {
  readonly card = input.required<Card>();
}
