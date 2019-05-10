import { Component, OnInit } from '@angular/core';
import { Review } from '../../models/review';
import { ReviewsService } from 'src/app/services/reviews/reviews.service';

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
