import { Component, OnInit } from '@angular/core';
import { Club } from 'src/app/models/club';
import { ClubServiceService } from 'src/app/services/club-service.service';
import { ClubMember } from 'src/app/models/club-member';
import { ClubMemberService } from 'src/app/services/club-member.service';


@Component({
  selector: 'app-club-lookup',
  templateUrl: './club-lookup.component.html',
  styleUrls: ['./club-lookup.component.css']
})
export class ClubLookupComponent implements OnInit {

  clubs: Club[];

  constructor(private clubService: ClubServiceService, private clubMemberService: ClubMemberService) { }

  ngOnInit() {
    this.clubService.findAll().subscribe(data => {
      this.clubs = data;
    });
  }

  Subscribe(event: Event, i: number){
    console.log(i);
    console.log(this.clubs[i].clubId);
    let clubMemberIdentity: any = {clubId: this.clubs[i].clubId, userId: 5};
    let newMember: ClubMember = new ClubMember(clubMemberIdentity, 'date goes here');
    this.clubMemberService.insertClubMember(newMember).subscribe(data =>{
      console.log(data);
    });

    console.log(newMember);
  }
  Unsubscribe(event: Event, i: number){
    let clubMemberIdentity: any = {clubId: this.clubs[i].clubId, userId: 5};
    let newMember: ClubMember = new ClubMember(clubMemberIdentity, 'date goes here');
    this.clubMemberService.deleteClubMember(newMember);
  }
}
