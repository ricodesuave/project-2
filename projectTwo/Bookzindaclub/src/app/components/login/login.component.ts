import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { first } from 'rxjs/operators';

import { AuthService } from '../../services/login/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
  ) {
    // if already logged in, procede to home
    if (this.authService.currentUserValue) {
      this.router.navigate(['/home']);
    }
    console.log('Login instatiation complete.');
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get form() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.form.email.value);

    if (this.loginForm.invalid) {
      console.log('Invalid Form');
      return;
    }
    this.loading = true;
    console.log('Attempting to log in');
    this.authService.login(this.form.email.value, this.form.password.value)
      .pipe(first()).subscribe(
        data => {
          console.log('Logged in');
          this.router.navigate(['/home']);
        },
        error => {
          console.log('Error Logging in');
          this.loading = false;
        }
      );
  }
}
