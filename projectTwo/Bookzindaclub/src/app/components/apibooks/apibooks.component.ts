import { Component, OnInit } from '@angular/core';
import { Apibooks } from 'src/app/models/apibooks';
import { GBAPIService } from 'src/app/services/gbapi.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-apibooks',
  templateUrl: './apibooks.component.html',
  styleUrls: ['./apibooks.component.css']
})
export class ApibooksComponent implements OnInit {

  apibooks: Apibooks[];
  store: any;

  constructor(private gbapiService: GBAPIService) { }

  ngOnInit() {
    this.gbapiService.loadUp().subscribe(data =>{
      this.apibooks=data;
      console.log(this.apibooks);
      this.store = new MatTableDataSource(this.apibooks);
    });
  }

  displayedColumns: string[] = ['bookTitle', 'bookAuthors'];
  applyFilter(filterValue: string) {
    this.store.filter = filterValue.trim().toLowerCase();
  }

}
