import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment as envir } from '../../../environments/environment';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<User>;
  currentUser$: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('current-user')));
    this.currentUser$ = this.currentUserSubject.asObservable();
  }

  get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string) {
    console.log('login function');

    console.log(email);

    return this.http.post<any>(`${envir.baseUrl}/auth/login`, {email, password})
      .pipe(map(currentUser => {
        if (currentUser) {
          localStorage.setItem('current-user', JSON.stringify(currentUser));
          this.currentUserSubject.next(currentUser);
        }
        return currentUser;
      }));
  }

  logout() {
    localStorage.removeItem('current-user');
    this.currentUserSubject.next(null);
  }
}
