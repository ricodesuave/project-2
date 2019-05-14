import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Club } from '../models/club';
import {Observable} from 'rxjs';
import { environment as envir } from '../../environments/environment.prod';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ClubServiceService {

  constructor(private http: HttpClient) { }

  public findAll(): Observable<Club[]> {
    return this.http.get<Club[]>(`${envir.baseUrl}/clubs/clubs`);
  }

  public findAllFromUser(userId: number): Observable<Club[]> {
    let params = new HttpParams().set('ownerId', userId.toString());
    return this.http.get<Club[]>(`${envir.baseUrl}/clubs/owner`, {params: params});
  }

  save(club: Club): Observable<Club>{
    return this.http.post<Club>(`${envir.baseUrl}/clubs/save`, club);
  }
}
