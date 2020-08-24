import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

import {UserService} from '../services/user.service';
import {User} from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.userService.user.authenticated) {
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }
  }
}
