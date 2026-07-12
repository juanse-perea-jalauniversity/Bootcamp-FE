import { HttpClient } from '@angular/common/http';
import { inject, Service, signal } from '@angular/core';

@Service()
export class CardsService {
	readonly #http = inject(HttpClient)
	readonly #ygoprodeckurl = 'https://db.ygoprodeck.com/api/v7/cardinfo.php'
	searchValue = signal("")

	getYuGiOhCards() {
		return this.#http.get<{ data: Card[] }>(this.#ygoprodeckurl)
	}

}
