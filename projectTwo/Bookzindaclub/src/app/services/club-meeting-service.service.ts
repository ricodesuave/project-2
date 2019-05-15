import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ClubMeeting } from '../models/club-meeting';
import { Observable } from 'rxjs';
import { environment as envir } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ClubMeetingServiceService {

  constructor( private http: HttpClient ) { }

  public  findAllFromClub(clubId: number): Observable<ClubMeeting[]> {
    let params = new HttpParams().set('clubId', clubId.toString());
    return this.http.get<ClubMeeting[]>(`${envir.baseUrl}/clubmeetings/club`, {params: params});;
  }
}
