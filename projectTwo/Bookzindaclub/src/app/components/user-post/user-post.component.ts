import { Component, OnInit } from '@angular/core';

import { ReviewsService } from 'src/app/services/reviews/reviews.service';
import { Review } from 'src/app/models/review';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css']
})
export class UserPostComponent implements OnInit {

  reviews: Review[];
  constructor(private reviewService: ReviewsService) { }

  ngOnInit() {
    this.reviewService.getAll().subscribe(data => {
      this.reviews = data;
    });
  }
}
