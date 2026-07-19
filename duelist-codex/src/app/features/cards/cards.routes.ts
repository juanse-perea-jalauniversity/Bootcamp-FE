import { Routes } from '@angular/router';

export const CARDS_ROUTES: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./pages/card-list/card-list').then(m => m.CardList),
		title: 'Home',
	},
];
