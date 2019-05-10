import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Review } from '../../models/review';
import { environment as envir } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor( private http: HttpClient) { }

  getAll() {
    return this.http.get<Review[]>(`${envir.baseUrl}/review/reviews`);
  }

  getById() {
    return this.http.get<Review>(`${envir.baseUrl}/review/review`);
  }

  save( review: Review ) {
    this.http.post<Review>(`${envir.baseUrl}/review/save`, review);
  }

  update( review: Review ) {
    this.http.put<Review>(`${envir.baseUrl}/review/update`, review);
  }

  delete( review: Review ) {
    this.http.delete<Review>(`${envir.baseUrl}/review/delete`);
  }
}
