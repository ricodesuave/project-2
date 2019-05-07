package com.bookzindaclub.web;

import com.bookzindaclub.model.Review;
import com.bookzindaclub.services.ReviewService;
import com.bookzindaclub.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/review")
public class ReviewController {

    private ReviewService reviewService;

    @Autowired
    public void setReviewService(ReviewService reviewService){this.reviewService = reviewService;}

    @GetMapping("review")
    public Review getById(Review review){return reviewService.getById(review.getReviewIdentity());}

    @GetMapping("reviews")
    public List<Review> getAll(){return reviewService.getAll();}

    @PostMapping("save")
    public void save(Review review){reviewService.save(review);}

    @PutMapping("update")
    public void update(Review review){reviewService.update(review);}

    @DeleteMapping("delete")
    public void delete(Review review){reviewService.delete(review);}

}
