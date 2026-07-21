import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { CardsService } from './cards-service';
import { Card } from './card.model';

export const cardResolver: ResolveFn<Card | null> = (route) =>
  inject(CardsService).getCardById(route.paramMap.get('id') ?? '');
