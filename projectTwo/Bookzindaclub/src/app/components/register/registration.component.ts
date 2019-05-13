import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/login/auth.service';
import { first } from 'rxjs/operators';

import { MaterialModule } from '../../material/material.module';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private userService: UserService
  ) {
    if (this.authService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  get form() {
    return this.registerForm.controls;
  }
  onSubmit() {
    console.log('Submitting Form');

    this.submitted = true;
    console.log('Checking validity');

    if (this.registerForm.invalid) {
      console.log('Form Invalid');
      return;
    }
    console.log('Form Valid');
    console.log(this.form.dateOfBirth.value);
    this.loading = true;
    this.userService.register(this.registerForm.value)
    .pipe(first()).subscribe(
      data => {
        console.log('Registration successful');
        console.dir(data);
        this.router.navigate(['/login']);
      },
      error => {
        console.log('An error has occured.');
        console.dir(error);
        this.loading = false;
      });
  }

}
