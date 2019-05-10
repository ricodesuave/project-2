import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Club } from '../models/club';
import { Observable } from 'rxjs';

import { environment as envir} from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class ClubLookupServiceService {
  
  

  constructor(private http: HttpClient) { 
  }

  public findAll(): Observable<Club[]> {
    return this.http.get<Club[]>(`${envir.baseUrl}/clubs`);
  }
}
