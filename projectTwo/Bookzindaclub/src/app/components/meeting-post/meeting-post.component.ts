import { Component, OnInit } from '@angular/core';
import { ReviewsService } from 'src/app/services/reviews/reviews.service';
import { Review } from 'src/app/models/review';
import { MeetingTransfer } from 'src/app/models/meeting-transfer';
import { MeetingPostService } from 'src/app/services/meeting-post.service';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/login/auth.service';

@Component({
  selector: 'app-meeting-post',
  templateUrl: './meeting-post.component.html',
  styleUrls: ['./meeting-post.component.css']
})
export class MeetingPostComponent implements OnInit {

  meetings: MeetingTransfer[];
  currentUser: User;
  currentUserSub: Subscription;
  constructor(private meetingPostService: MeetingPostService, private authService: AuthService) {
    this.currentUserSub = this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
  }

  ngOnInit() {
    this.meetingPostService.getAll(this.currentUser.userId).subscribe(data => {
      this.meetings = data;
    });
  }

}
