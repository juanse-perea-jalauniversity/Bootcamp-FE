import { computed, Service, signal } from '@angular/core';

const STORAGE_KEY = 'duelist:username';

@Service()
export class ProfileService {
	readonly #username = signal<string>(this.#load());
	readonly username = this.#username.asReadonly();
	readonly hasUsername = computed(() => this.#username().trim().length > 0);

	setUsername(name: string): void {
		const trimmed = name.trim();
		this.#username.set(trimmed);
		this.#save(trimmed);
	}

	#load(): string {
		try {
			return sessionStorage.getItem(STORAGE_KEY) ?? '';
		} catch {
			return '';
		}
	}

	#save(name: string): void {
		try {
			sessionStorage.setItem(STORAGE_KEY, name);
		} catch {
		}
	}
}
