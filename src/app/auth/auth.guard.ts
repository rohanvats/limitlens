import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanLoad,
  Route,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable, skipWhile, take, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private navCtrl: NavController,
    private authService: AuthService
  ) {}
  canActivate(
    route: Route,
    // segments: UrlSegment[]
    // route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    console.log('route segments guard...', route);
    if (!this.authService.userLoggedIn) {
      console.log('auth guard...', this.authService.userLoggedIn);
      this.authService.openSignInModal();
      return false;
    }
    console.log('auth guard...', this.authService.userLoggedIn);
    return this.authService.userLoggedIn;
  }
}
