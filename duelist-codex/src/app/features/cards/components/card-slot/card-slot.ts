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
  readonly cardClick = output<Card>();
}
