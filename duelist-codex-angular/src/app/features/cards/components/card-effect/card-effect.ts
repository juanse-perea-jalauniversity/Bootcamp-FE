import { Component, input } from '@angular/core';
import { Card } from '../../data/card.model';

@Component({
  selector: 'card-effect',
  imports: [],
  templateUrl: './card-effect.html',
  styleUrl: './card-effect.css',
})
export class CardEffect {
  readonly card = input.required<Card>();
}
