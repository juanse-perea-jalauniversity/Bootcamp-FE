import { Component, input, signal } from '@angular/core';
import { Tabs } from '../../../../shared/components/tabs/tabs';
import { Card } from '../../data/card.model';

@Component({
  selector: 'card-detail-view',
  imports: [Tabs],
  templateUrl: './card-detail-view.html',
  styleUrl: './card-detail-view.css',
})
export class CardDetailView {
  readonly card = input.required<Card>();
  readonly activeTab = signal('Effect');
}
