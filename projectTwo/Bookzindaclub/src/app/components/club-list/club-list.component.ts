import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Club } from 'src/app/models/club';
import { ClubServiceService } from 'src/app/services/club-service.service';
import { ClubMeeting } from 'src/app/models/club-meeting';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/login/auth.service';


@Component({
  selector: 'app-club-list',
  templateUrl: './club-list.component.html',
  styleUrls: ['./club-list.component.css']
})
export class ClubListComponent implements OnInit {

  clubs: Club[];
  @Output() selectedClub: EventEmitter<Club> = new EventEmitter<Club>();
  @Output() newClub: EventEmitter<boolean> = new EventEmitter<boolean>();

  currentUser: User;
  currentUserSub: Subscription;

  constructor( private clubService: ClubServiceService, private authService: AuthService ) {
    this.currentUserSub = this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
   }

  ngOnInit() {
    this.clubService.findAllFromUser(this.currentUser.userId).subscribe(data => {
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
