import { Component, OnInit } from '@angular/core';
import { ReviewsService } from 'src/app/services/reviews/reviews.service';
import { ReviewTransfer } from 'src/app/models/review-transfer';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css']
})
export class UserPostComponent implements OnInit {

  reviews: ReviewTransfer[];

  constructor(private reviewService: ReviewsService) { }

  ngOnInit() {
    this.reviewService.getAll().subscribe(data => {
      console.log(data);
      this.reviews = data;
    });
  }
}
