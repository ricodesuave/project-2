import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book';
import { environment as envir } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor(private http: HttpClient) { }

  public findAll(): Observable<Book[]> {
    return this.http.get<Book[]>(`${envir.baseUrl}/books/books`)
  }
}
