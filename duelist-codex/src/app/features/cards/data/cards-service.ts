import { HttpClient } from '@angular/common/http';
import { inject, Service, signal } from '@angular/core';
import { catchError, map, of, type Observable } from 'rxjs';
import { Card, CardApiResponse } from './card.model';

const PAGE_SIZE = 12;

@Service()
export class CardsService {
	readonly #http = inject(HttpClient)
	readonly #ygoprodeckurl = 'https://db.ygoprodeck.com/api/v7/cardinfo.php'

	readonly searchValue = signal("")
	readonly currentPage = signal(1)

	readonly cards = signal<Card[]>([])
	readonly totalPages = signal(1)
	readonly loading = signal(true)

	readonly selectedCard = signal<Card | null>(null)

	selectCard(card: Card): void {
		this.selectedCard.set(card)
	}

	closeModal(): void {
		this.selectedCard.set(null)
	}

	setSearchTerm(term: string): void {
		this.searchValue.set(term)
		this.currentPage.set(1)
		this.fetchCards()
	}

	goToPage(page: number): void {
		this.currentPage.set(page)
		this.fetchCards()
	}

	fetchCards(): void {
		this.loading.set(true)

		const term = this.searchValue().trim()
		const params: Record<string, string | number> = {
			num: PAGE_SIZE,
			offset: (this.currentPage() - 1) * PAGE_SIZE,
		}
		if (term) {
			params['fname'] = term
		}

		this.#http
			.get<CardApiResponse>(this.#ygoprodeckurl, { params })
			.pipe(
				catchError(() => of<CardApiResponse>({ data: [] })),
			)
			.subscribe(res => {
				this.cards.set(res.data ?? [])
				this.totalPages.set(res.meta?.total_pages ?? 1)
				this.loading.set(false)
			})
	}

	getCardById(id: string): Observable<Card | null> {
		return this.#http
			.get<CardApiResponse>(this.#ygoprodeckurl, { params: { id } })
			.pipe(
				map(res => res.data?.[0] ?? null),
				catchError(() => of<Card | null>(null)),
			)
	}
}
