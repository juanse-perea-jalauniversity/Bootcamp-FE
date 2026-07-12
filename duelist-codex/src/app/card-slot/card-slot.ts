import { Component, input } from '@angular/core';

@Component({
  selector: 'card-slot',
  imports: [],
  templateUrl: './card-slot.html',
  styleUrl: './card-slot.css',
})
export class CardSlot {
  readonly cardImage = input.required<string>();
}
