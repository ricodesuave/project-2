import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class GBAPIService {

  constructor(private http: HttpClient) { }

  public loadUp(): Observable<Book[]>{
    return this.http.get<Book[]>(`https://googleapi`)
  }
}
