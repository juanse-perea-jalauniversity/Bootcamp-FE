import { Routes } from '@angular/router';
import { cardResolver } from './data/card.resolver';

export const CARDS_ROUTES: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./pages/card-list/card-list').then(m => m.CardList),
		title: 'Home',
	},
	{
		path: 'card/:id',
		loadComponent: () =>
			import('./pages/card-detail/card-detail').then(m => m.CardDetail),
		title: 'Card Detail',
		resolve: { card: cardResolver },
		children: [
			{ path: '', redirectTo: 'effect', pathMatch: 'full' },
			{
				path: 'effect',
				loadComponent: () =>
					import('./components/card-effect/card-effect').then(m => m.CardEffect),
			},
			{
				path: 'statistics',
				loadComponent: () =>
					import('./components/card-statistics/card-statistics').then(m => m.CardStatistics),
			},
			{
				path: 'prices',
				loadComponent: () =>
					import('./components/card-prices/card-prices').then(m => m.CardPrices),
			},
		],
	},
];
