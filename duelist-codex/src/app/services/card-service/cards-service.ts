import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';

@Service()
export class CardsService {
	readonly #http = inject(HttpClient)
	readonly #ygoprodeckurl = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=24&offset=0'

	getYuGiOhCards() {
		return this.#http.get<{ data: Card[] }>(this.#ygoprodeckurl)
	}
}
