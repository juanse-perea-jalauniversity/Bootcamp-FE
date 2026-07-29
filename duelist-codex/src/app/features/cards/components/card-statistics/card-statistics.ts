import { Component, input } from '@angular/core';
import { Card } from '../../data/card.model';

@Component({
  selector: 'card-statistics',
  imports: [],
  templateUrl: './card-statistics.html',
  styleUrl: './card-statistics.css',
})
export class CardStatistics {
  readonly card = input.required<Card>();
}
