import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControlName, FormControl, Validators } from '@angular/forms';
import { ClubServiceService } from 'src/app/services/club-service.service';
import { Club } from 'src/app/models/club';
import { User } from 'src/app/models/user';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/login/auth.service';

@Component({
  selector: 'app-club-creation-form',
  templateUrl: './club-creation-form.component.html',
  styleUrls: ['./club-creation-form.component.css']
})
export class ClubCreationFormComponent implements OnInit {

  value = '';

  clubFormGroup: FormGroup;
  currentUser: User;
  currentUserSub: Subscription;

  constructor(private clubService: ClubServiceService,private authService: AuthService) {
    this.currentUserSub = this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
  }
  

  ngOnInit() {
    this.clubFormGroup = new FormGroup({
      ownerId: new FormControl({value: 0}, Validators.required),
      clubName: new FormControl({value: ''}, Validators.required),
      clubDescription: new FormControl('', Validators.required)
    });
  }

  createClub() {
    const input = {...this.clubFormGroup.value};
    console.log(input);
    // const testUser: User = new User(9001, 'jose1@gmail.com', '123', 'jose', 'nunez', null);

    let val: Club = new Club(0, input.clubName, input.clubDescription, this.currentUser);
    console.log(val);

    this.clubService.save(val).subscribe(data => {
      console.log(data);
    });
  }

}


