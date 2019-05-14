import { Component, OnInit } from '@angular/core';
import { Club } from 'src/app/models/club';
import { ClubServiceService } from 'src/app/services/club-service.service';

@Component({
  selector: 'app-club-list',
  templateUrl: './club-list.component.html',
  styleUrls: ['./club-list.component.css']
})
export class ClubListComponent implements OnInit {

  clubs: Club[];

  constructor( private clubService: ClubServiceService ) { }

  ngOnInit() {
    this.clubService.findAllFromUser(9001).subscribe(data => {
      this.clubs = data;
    });
  }

}
