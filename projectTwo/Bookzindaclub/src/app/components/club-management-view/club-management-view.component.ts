import { Component, OnInit } from '@angular/core';
import { Club } from 'src/app/models/club';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-club-management-view',
  templateUrl: './club-management-view.component.html',
  styleUrls: ['./club-management-view.component.css']
})
export class ClubManagementViewComponent implements OnInit {

  club: Club = new Club(-1, "", "", new User(-1, "", "", "","",""));

  displayMeetings: boolean = false;
  displayForm: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  setSelectedClub(selected: Club){
    console.log('set: ', selected);
    this.club = selected
    this.displayForm = false;
    this.displayMeetings = true;
  }

  displayCreationForm(shouldDisplay: boolean){
    console.log('displaying form');
    this.displayMeetings = false;
    this.displayForm = true;
  }

}
