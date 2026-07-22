import { Directive, ElementRef, Renderer2, effect, inject, input } from '@angular/core';
import { Card } from '../data/card.model';
import { FeaturedAspects, featuredAspects } from '../data/featured';

const STAR_COLORS: Record<keyof FeaturedAspects, string> = {
  level: 'orange',
  atk: 'red',
  def: 'dodgerblue',
};

const STAR_ORDER: (keyof FeaturedAspects)[] = ['level', 'atk', 'def'];

@Directive({
  selector: '[featuredStars]',
})
export class FeaturedStars {
  readonly card = input.required<Card>({ alias: 'featuredStars' });

  readonly #el = inject<ElementRef<HTMLElement>>(ElementRef);
  readonly #renderer = inject(Renderer2);

  constructor() {
    effect(() => this.#render(featuredAspects(this.card())));
  }

  #render(aspects: FeaturedAspects): void {
    const host = this.#el.nativeElement;

    const active = STAR_ORDER.filter(aspect => aspects[aspect]);
    if (active.length === 0) {
      return;
    }

    const container = this.#renderer.createElement('div');
    this.#renderer.addClass(container, 'highlight-stars');
    this.#renderer.setStyle(container, 'display', 'flex');
    this.#renderer.setStyle(container, 'gap', '3px');
    this.#renderer.setStyle(container, 'margin', '2px 0 4px');

    for (const aspect of active) {
      const star = this.#renderer.createElement('span');
      this.#renderer.appendChild(star, this.#renderer.createText('★'));
      this.#renderer.setStyle(star, 'color', STAR_COLORS[aspect]);
      this.#renderer.setStyle(star, 'font-size', '0.85rem');
      this.#renderer.setStyle(star, 'line-height', '1');
      this.#renderer.setStyle(star, 'text-shadow', '0 0 2px rgba(0, 0, 0, 0.6)');
      this.#renderer.appendChild(container, star);
    }

    this.#renderer.appendChild(host, container);
  }
}
