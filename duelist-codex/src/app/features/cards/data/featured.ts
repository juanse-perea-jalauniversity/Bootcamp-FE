import { Card } from './card.model';

export const FEATURED_THRESHOLDS = {
  level: 8,
  atk: 2500,
  def: 2500,
};

export interface FeaturedAspects {
  level: boolean;
  atk: boolean;
  def: boolean;
}

export function featuredAspects(
  card: Card,
  thresholds = FEATURED_THRESHOLDS,
): FeaturedAspects {
  return {
    level: (card.level ?? 0) >= thresholds.level,
    atk: (card.atk ?? 0) >= thresholds.atk,
    def: (card.def ?? 0) >= thresholds.def,
  };
}

export function isFeatured(card: Card, thresholds = FEATURED_THRESHOLDS): boolean {
  const aspects = featuredAspects(card, thresholds);
  return aspects.level || aspects.atk || aspects.def;
}
