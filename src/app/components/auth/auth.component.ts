import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

import {UserService} from '../../services/user.service';
import {AuthGuard} from '../auth.guard';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  providers: [UserService, AuthGuard]
})
export class AuthComponent implements OnInit {
  login: string;
  password: string;
  error = false;

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
  }

  loginAttempt(login, password) {
    if (this.userService.loginUser(login, password)) {
      this.router.navigate(['/contacts']);
    } else {
      this.error = true;
    }
    console.log(this.userService.authenticated);
  }
}

