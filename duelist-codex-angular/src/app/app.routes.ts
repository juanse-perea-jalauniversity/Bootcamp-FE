import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadChildren: () =>
			import('./features/cards/cards.routes').then(m => m.CARDS_ROUTES),
	},
];
