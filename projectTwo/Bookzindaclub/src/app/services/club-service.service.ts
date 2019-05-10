import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Club } from '../models/club';
import {Observable} from 'rxjs';
import { environment as envir } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ClubServiceService {

  constructor(private http: HttpClient) { }

  save(club: Club): Observable<Club>{
    return this.http.post<Club>(`${envir.baseUrl}/clubs/save`, club);
  }
}
