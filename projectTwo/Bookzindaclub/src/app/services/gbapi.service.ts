import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Apibooks } from '../models/apibooks';

@Injectable({
  providedIn: 'root'
})
export class GBAPIService {

  constructor(private http: HttpClient) { }

  public loadUp(): Observable<Apibooks[]>{
    
    return this.http.get<Apibooks[]>(`https://www.googleapis.com/books/v1/volumes?q=fire&fields=items/volumeInfo(title,authors)`);
  }
}
