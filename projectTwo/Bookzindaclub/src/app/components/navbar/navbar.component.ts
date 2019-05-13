import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { User } from '../../models/user';
import { AuthService } from 'src/app/services/login/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnDestroy {

  currentUser: User;
  currentUserSub: Subscription;

  constructor(private authService: AuthService, private router: Router) {
    this.currentUserSub = this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
  }
  ngOnDestroy() {
    this.currentUserSub.unsubscribe();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
