import { HttpClient, httpResource } from '@angular/common/http';
import { computed, inject, linkedSignal, Service, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { catchError, debounceTime, distinctUntilChanged, map, of, type Observable } from 'rxjs';
import { Card, CardApiResponse } from './card.model';
import { SearchCriteria } from './filters';

const PAGE_SIZE = 12;
const SEARCH_DEBOUNCE_MS = 400;

@Service()
export class CardsService {
	readonly #http = inject(HttpClient)
	readonly #ygoprodeckurl = 'https://db.ygoprodeck.com/api/v7/cardinfo.php'

	readonly searchValue = signal("")
	readonly typeFilter = signal("")
	readonly attributeFilter = signal("")

	readonly #debouncedSearch = toSignal(
		toObservable(this.searchValue).pipe(
			debounceTime(SEARCH_DEBOUNCE_MS),
			map(term => term.trim()),
			distinctUntilChanged(),
		),
		{ initialValue: "" },
	)

	readonly #criteria = computed<SearchCriteria>(() => ({
		fname: this.#debouncedSearch(),
		type: this.typeFilter(),
		attribute: this.attributeFilter(),
	}))

	readonly hasActiveCriteria = computed(() => {
		const { fname, type, attribute } = this.#criteria()
		return Boolean(fname || type || attribute)
	})

	readonly currentPage = linkedSignal({
		source: this.#criteria,
		computation: () => 1,
	})

	readonly #cardsResource = httpResource<CardApiResponse>(() => {
		const { fname, type, attribute } = this.#criteria()

		return {
			url: this.#ygoprodeckurl,
			params: {
				num: PAGE_SIZE,
				offset: (this.currentPage() - 1) * PAGE_SIZE,
				...(fname && { fname }),
				...(type && { type }),
				...(attribute && { attribute }),
			},
		}
	})

	readonly cards = computed(() => this.#cardsResource.value()?.data ?? [])
	readonly totalPages = computed(() => this.#cardsResource.value()?.meta?.total_pages ?? 1)
	readonly loading = this.#cardsResource.isLoading
	readonly error = computed(() => this.#cardsResource.error()?.message ?? null)

	setSearchTerm(term: string): void {
		this.searchValue.set(term)
	}

	setTypeFilter(type: string): void {
		this.typeFilter.set(type)
	}

	setAttributeFilter(attribute: string): void {
		this.attributeFilter.set(attribute)
	}

	clearCriteria(): void {
		this.searchValue.set("")
		this.typeFilter.set("")
		this.attributeFilter.set("")
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
