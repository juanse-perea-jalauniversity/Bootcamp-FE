import { Component, input } from '@angular/core';
import { Card } from '../../data/card.model';
import { HighglightAspectsPipe } from '../../../../pipes/highlight-aspects-pipe';

@Component({
  selector: 'card-statistics',
  imports: [HighglightAspectsPipe],
  templateUrl: './card-statistics.html',
  styleUrl: './card-statistics.css',
})
export class CardStatistics {
  readonly card = input.required<Card>();
}
