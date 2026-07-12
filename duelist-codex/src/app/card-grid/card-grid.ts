import { Component, inject, OnInit, signal } from '@angular/core';
import { CardsService } from '../services/card-service/cards-service';
import { CardSlot } from "../card-slot/card-slot";

@Component({
  selector: 'card-grid',
  imports: [CardSlot],
  templateUrl: './card-grid.html',
  styleUrl: './card-grid.css',
})
export class CardGrid implements OnInit {
  readonly #cardService = inject(CardsService)
  readonly cards = signal<Card[] | null>(null);

  ngOnInit(): void {
    console.log("On init, fetching cards...")
    this.#cardService.getYuGiOhCards()
      .subscribe(res => this.cards.set(res.data))
  }

}
