import { Component, OnInit } from '@angular/core';
import { Club } from 'src/app/models/club';
import { ClubServiceService } from 'src/app/services/club-service.service';


@Component({
  selector: 'app-club-lookup',
  templateUrl: './club-lookup.component.html',
  styleUrls: ['./club-lookup.component.css']
})
export class ClubLookupComponent implements OnInit {

  clubs: Club[];

  constructor(private clubService: ClubServiceService) { }

  ngOnInit() {
    this.clubService.findAll().subscribe(data => {
      this.clubs = data;
    });
  }
}
