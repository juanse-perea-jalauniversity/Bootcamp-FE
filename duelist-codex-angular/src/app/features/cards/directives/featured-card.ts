import { Directive, computed, input } from '@angular/core';
import { Card } from '../data/card.model';
import { isFeatured } from '../data/featured';

@Directive({
  selector: '[featuredCard]',
  host: {
    '[class.is-featured]': 'featured()',
  },
})
export class FeaturedCard {
  readonly card = input.required<Card>({ alias: 'featuredCard' });

  readonly featured = computed(() => isFeatured(this.card()));
}
