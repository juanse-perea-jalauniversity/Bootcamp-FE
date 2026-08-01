import { HttpClient, httpResource } from '@angular/common/http';
import { computed, inject, linkedSignal, Service, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { catchError, debounceTime, distinctUntilChanged, map, of, type Observable } from 'rxjs';
import { Card, CardApiResponse } from './card.model';

const PAGE_SIZE = 12;
const SEARCH_DEBOUNCE_MS = 400;

@Service()
export class CardsService {
	readonly #http = inject(HttpClient)
	readonly #ygoprodeckurl = 'https://db.ygoprodeck.com/api/v7/cardinfo.php'

	readonly searchValue = signal("")

	readonly #debouncedSearch = toSignal(
		toObservable(this.searchValue).pipe(
			debounceTime(SEARCH_DEBOUNCE_MS),
			map(term => term.trim()),
			distinctUntilChanged(),
		),
		{ initialValue: "" },
	)

	readonly currentPage = linkedSignal<string, number>({
		source: this.#debouncedSearch,
		computation: () => 1,
	})

	readonly #cardsResource = httpResource<CardApiResponse>(() => ({
		url: this.#ygoprodeckurl,
		params: {
			num: PAGE_SIZE,
			offset: (this.currentPage() - 1) * PAGE_SIZE,
			...(this.#debouncedSearch() && { fname: this.#debouncedSearch() }),
		},
	}))

	readonly cards = computed(() => this.#cardsResource.value()?.data ?? [])
	readonly totalPages = computed(() => this.#cardsResource.value()?.meta?.total_pages ?? 1)
	readonly loading = this.#cardsResource.isLoading
	readonly error = computed(() => this.#cardsResource.error()?.message ?? null)

	setSearchTerm(term: string): void {
		this.searchValue.set(term)
	}

	goToPage(page: number): void {
		this.currentPage.set(page)
	}

	reload(): void {
		this.#cardsResource.reload()
	}

	getCardById(id: string): Observable<Card | null> {
		return this.#http
			.get<CardApiResponse>(this.#ygoprodeckurl, { params: { id } })
			.pipe(
				map(res => res.data?.[0] ?? null),
				catchError(() => of<Card | null>(null)),
			)
	}

	getCardsByIds(ids: number[]): Observable<Card[]> {
		if (ids.length === 0) {
			return of<Card[]>([])
		}

		return this.#http
			.get<CardApiResponse>(this.#ygoprodeckurl, { params: { id: ids.join(',') } })
			.pipe(
				map(res => res.data ?? []),
				catchError(() => of<Card[]>([])),
			)
	}
}
