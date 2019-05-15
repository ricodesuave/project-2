import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as envir } from '../../environments/environment';
import { MeetingTransfer } from '../models/meeting-transfer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeetingPostService {

  constructor(private http: HttpClient) { }

  getAll(userId: number) {
    return this.http.get<any[]>(`${envir.baseUrl}/clubmeetings/clubmeetings?userId=${userId}`);
  }

}
