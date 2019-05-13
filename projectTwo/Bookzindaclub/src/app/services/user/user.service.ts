import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment as envir } from '../../../environments/environment';
import { User } from 'src/app/models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient ) { }

  getAll() {
    return this.http.get<User[]>(`${envir.baseUrl}/user/users`);
  }

  getById() {
    return this.http.get<User>(`${envir.baseUrl}/user/user`);
  }

  save(user: User) {
    return this.http.post<User>(`${envir.baseUrl}/user/save`, user);
  }

  update(user: User) {
    return this.http.put<User>(`${envir.baseUrl}/user/update`, user);
  }

  delete(user: User) {
    return this.http.delete<User>(`${envir.baseUrl}/user/delete`);
  }

  register(user: User) {
    console.log('Service: Register');
    return this.http.post<User>(`${envir.baseUrl}/user/save`, user);
  }
}

