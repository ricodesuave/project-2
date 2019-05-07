import { Component, OnInit } from '@angular/core';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  input = {}
  baseUrl: string

  constructor() {
    this.baseUrl = environment.baseUrl;
  }

  ngOnInit() {
  }

}
