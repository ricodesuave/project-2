import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../models/user';
import { UserService } from 'src/app/services/user/user.service';
import { AuthService } from 'src/app/services/login/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: User;
  currentUserSub: Subscription;
  hide = true;
  profileForm: FormGroup;
  loading = false;
  submitted = false;
  updatedUser: User;

  constructor(private authService: AuthService, private router: Router,
              private formBuilder: FormBuilder, private userService: UserService) {
    this.currentUserSub = this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
  }
  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      email: ['' , Validators.required],
      password: ['', Validators.required],
    });

  }
  get form() {
    return this.profileForm.controls;
  }
  onSubmit() {
    console.log('Submitting Form');

    this.submitted = true;
    console.log('Checking validity');

    if (this.profileForm.invalid) {
      console.log('Form Invalid');
      return;
    }
    console.log('Form Valid');
    this.loading = true;

    console.log(this.currentUser.firstName);

    this.currentUser.email = this.form.email.value;
    this.currentUser.password = this.form.password.value;

    this.userService.update(this.currentUser)
    .pipe(first()).subscribe(
      data => {
        console.log('Update successful');
        console.dir(data);
        this.router.navigate(['/home']);
      },
      error => {
        console.log('An error has occured.');
        console.dir(error);
        this.loading = false;
      });
  }
}
