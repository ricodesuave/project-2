import { Component, OnInit } from '@angular/core';
import { ReviewsService } from 'src/app/services/reviews/reviews.service';
import { Review } from 'src/app/models/review';

@Component({
  selector: 'app-meeting-post',
  templateUrl: './meeting-post.component.html',
  styleUrls: ['./meeting-post.component.css']
})
export class MeetingPostComponent implements OnInit {
  reviews: Review[];

  constructor(private reviewService: ReviewsService) { }

  ngOnInit() {
    this.reviewService.getAll().subscribe(data => {
      this.reviews = data;
    });
  }

}
