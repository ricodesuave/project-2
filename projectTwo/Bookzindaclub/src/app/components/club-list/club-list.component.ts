import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Club } from 'src/app/models/club';
import { ClubServiceService } from 'src/app/services/club-service.service';
import { ClubMeeting } from 'src/app/models/club-meeting';


@Component({
  selector: 'app-club-list',
  templateUrl: './club-list.component.html',
  styleUrls: ['./club-list.component.css']
})
export class ClubListComponent implements OnInit {

  clubs: Club[];
  @Output() selectedClub: EventEmitter<Club> = new EventEmitter<Club>();
  @Output() newClub: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor( private clubService: ClubServiceService ) { }

  ngOnInit() {
    this.clubService.findAllFromUser(9001).subscribe(data => {
      this.clubs = data;
    });
  }

  selectingClub(event: Event, selected: Club){
    console.log('emiting: ', selected);
    this.selectedClub.emit(selected);
  }

  creatingClub(event:Event){
    console.log('emiting', event)
    this.newClub.emit(true);
  }

}
