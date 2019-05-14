import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClubMember } from '../models/club-member';
import { Observable } from 'rxjs';
import { environment as envir } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ClubMemberService {

  constructor(private http: HttpClient) { }

  public insertClubMember(clubMember: ClubMember): Observable<ClubMember>{
    return this.http.post<ClubMember>(`${envir.baseUrl}/clubmembers/save`, clubMember);
  }

  public deleteClubMember(clubMember: ClubMember){
    this.http.delete<ClubMember>(`${envir.baseUrl}/clubmembers/delete`);
  }
}
