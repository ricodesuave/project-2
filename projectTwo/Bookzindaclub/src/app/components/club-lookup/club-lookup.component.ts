import { Component, OnInit } from '@angular/core';
import { Club } from 'src/app/models/club';
import { ClubLookupServiceService } from 'src/app/services/club-lookup-service.service';

@Component({
  selector: 'app-club-lookup',
  templateUrl: './club-lookup.component.html',
  styleUrls: ['./club-lookup.component.css']
})
export class ClubLookupComponent implements OnInit {

  clubs: Club[];

  constructor(private clubLookupService: ClubLookupServiceService) { }

  ngOnInit() {
    this.clubLookupService.findAll().subscribe(data => {
      this.clubs = data;
    });
  }
}
