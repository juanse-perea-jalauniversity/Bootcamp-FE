import { Routes } from '@angular/router';

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
	},
];
