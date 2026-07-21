import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CardDetailHeader } from '../../components/card-detail-header/card-detail-header';
import { Card } from '../../data/card.model';

@Component({
  selector: 'card-detail',
  imports: [RouterLink, RouterLinkActive, RouterOutlet, CardDetailHeader],
  templateUrl: './card-detail.html',
  styleUrl: './card-detail.css',
})
export class CardDetail {
  readonly card = input.required<Card | null>();
}
