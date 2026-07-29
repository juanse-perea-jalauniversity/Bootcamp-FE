import { Service, signal } from '@angular/core';
import { Card } from './card.model';

const STORAGE_KEY = 'duelist:favorites';

@Service()
export class CollectionService {
	readonly #favorites = signal<number[]>(this.#load());
	readonly favorites = this.#favorites.asReadonly();

	isFavorite(id: number): boolean {
		return this.#favorites().includes(id);
	}

	toggle(card: Card): void {
		const id = card.id;
		const updatedFavorites = this.isFavorite(id)
			? this.#favorites().filter(favId => favId !== id)
			: [...this.#favorites(), id];

		this.#favorites.set(updatedFavorites);
		this.#save(updatedFavorites);
	}

	#load(): number[] {
		try {
			const raw = sessionStorage.getItem(STORAGE_KEY);
			return raw ? (JSON.parse(raw) as number[]) : [];
		} catch {
			return [];
		}
	}

	#save(ids: number[]): void {
		try {
			sessionStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
		} catch {
		}
	}
}
