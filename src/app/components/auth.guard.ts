import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

import {UserService} from '../services/user.service';
import {AuthComponent} from './auth/auth.component';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // if (this.userService.authenticated) {
    //   return true;
    // } else {
    //   this.router.navigate(['']);
    //   return false;
    // }
    if (this.userService.loginUser('admin', 'admin')) {
      return true;
    }
  }
}
