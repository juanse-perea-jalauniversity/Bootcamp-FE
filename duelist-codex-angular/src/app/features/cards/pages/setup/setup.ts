import { Component, inject, input, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../../data/profile-service';

@Component({
  selector: 'setup',
  imports: [],
  templateUrl: './setup.html',
  styleUrl: './setup.css',
})
export class Setup {
  readonly returnUrl = input<string>('/collection');

  readonly #profile = inject(ProfileService);
  readonly #router = inject(Router);

  readonly name = signal('');

  onInput(event: Event): void {
    this.name.set((event.target as HTMLInputElement).value);
  }

  submit(event: Event): void {
    event.preventDefault();
    const name = this.name().trim();
    if (!name) {
      return;
    }
    this.#profile.setUsername(name);
    this.#router.navigateByUrl(this.returnUrl());
  }
}
