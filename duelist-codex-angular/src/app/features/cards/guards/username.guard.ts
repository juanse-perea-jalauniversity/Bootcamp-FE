import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ProfileService } from '../data/profile-service';

export const usernameGuard: CanActivateFn = (_route, state) => {
	const profile = inject(ProfileService);
	const router = inject(Router);

	return profile.hasUsername()
		? true
		: router.createUrlTree(['/setup'], { queryParams: { returnUrl: state.url } });
};
