import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/login/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    if(this.authService.currentUserValue){
      this.router.navigate(['/home']);
    }
  }

  ngOnInit() {
  }

}
