import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { GBAPIService } from 'src/app/services/gbapi.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  searchFG: FormGroup;

  constructor(private gbapiService: GBAPIService) { }

  ngOnInit() {
    this.searchFG= new FormGroup({
      searchval: new FormControl('')
    });
  }

  Searchfxn(){
    let input= {...this.searchFG.value};
    
    this.gbapiService.loadUp().subscribe(data =>{
    });
  }
}
