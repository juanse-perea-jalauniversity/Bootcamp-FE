import { Component, inject, OnInit } from '@angular/core';
import { CardsService } from '../services/card-service/cards-service';

@Component({
  selector: 'card-grid',
  imports: [],
  templateUrl: './card-grid.html',
  styleUrl: './card-grid.css',
})
export class CardGrid implements OnInit {
  readonly #cardService = inject(CardsService)

  ngOnInit(): void {
    console.log("On init, fetching cards...")
    this.#cardService.getYuGiOhCards().subscribe(res => console.log("res: ", res))
  }

}
