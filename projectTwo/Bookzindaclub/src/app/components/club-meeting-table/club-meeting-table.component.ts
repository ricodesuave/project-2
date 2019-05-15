import { Component, OnInit, Input } from '@angular/core';
import { ClubMeeting } from 'src/app/models/club-meeting';
import { ClubMeetingServiceService } from 'src/app/services/club-meeting-service.service';
import { Club } from 'src/app/models/club';

@Component({
  selector: 'app-club-meeting-table',
  templateUrl: './club-meeting-table.component.html',
  styleUrls: ['./club-meeting-table.component.css']
})
export class ClubMeetingTableComponent implements OnInit {

  meetings: ClubMeeting[];

  @Input()
  selectedClub: Club;

  constructor( private clubMeetingService: ClubMeetingServiceService ) { }

  ngOnInit() {
    this.clubMeetingService.findAllFromClub(this.selectedClub.clubId).subscribe(data => {
      console.log(data);
      this.meetings = data;
    });
  }

  ngOnChanges(change){
    console.log('changed');
    this.reloadData();
  }

  reloadData(){
    this.clubMeetingService.findAllFromClub(this.selectedClub.clubId).subscribe(data => {
      console.log(data);
      this.meetings = data;
    });
  }

}
