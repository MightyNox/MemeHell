import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from '../auth/services/auth.service';

@Injectable()
export class RoutingGuardService implements CanActivate {
  constructor(private readonly router: Router,
              private readonly authService: AuthService) {
  }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authService.currentUser$.value;
    if (currentUser) {
      return true;
    }

    await this.router.navigate(['/login'], {
      queryParams: {
        returnUrl: state.url
      }
    });
    return false;
  }
}
