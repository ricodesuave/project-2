import { Component, OnInit } from '@angular/core';
import { Club } from 'src/app/models/club';
import { ClubServiceService } from 'src/app/services/club-service.service';
import { ClubMember } from 'src/app/models/club-member';
import { ClubMemberService } from 'src/app/services/club-member.service';
import { MatTableDataSource } from "@angular/material";
import { SelectionModel } from '@angular/cdk/collections';


@Component({
  selector: 'app-club-lookup',
  templateUrl: './club-lookup.component.html',
  styleUrls: ['./club-lookup.component.css']
})
export class ClubLookupComponent implements OnInit {

  clubs: Club[];
  store: any;
  selection: any;
  
  

  constructor(private clubService: ClubServiceService, private clubMemberService: ClubMemberService) { }

  ngOnInit() {
      this.clubService.findAll().subscribe(data => {
      this.clubs=data;
      this.store = new MatTableDataSource(this.clubs);
      this.selection= new SelectionModel(true, []);
    });
  }

  // Subscribe(event: Event, i: number){
  //   console.log(i);
  //   console.log(this.clubs[i].clubId);
  //   let clubMemberIdentity: any = {clubId: this.clubs[i].clubId, userId: 5};
  //   let newMember: ClubMember = new ClubMember(clubMemberIdentity, 'date goes here');
  //   this.clubMemberService.insertClubMember(newMember).subscribe(data =>{
  //     console.log(data);
  //   });

  //   console.log(newMember);
  // }
  // Unsubscribe(event: Event, i: number){
  //   let clubMemberIdentity: any = {clubId: this.clubs[i].clubId, userId: 5};
  //   let newMember: ClubMember = new ClubMember(clubMemberIdentity, 'date goes here');
  //   this.clubMemberService.deleteClubMember(newMember);
  // }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.store.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.store.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: Club): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row}`;
  }

  displayedColumns: string[] = ['select', 'clubName', 'clubDescription', 'owner'];
  applyFilter(filterValue: string) {
    this.store.filter = filterValue.trim().toLowerCase();
  }
}
