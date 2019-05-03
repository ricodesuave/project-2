package com.bookzindaclub.services;

import com.bookzindaclub.model.Review;
import com.bookzindaclub.model.ReviewIdentity;

import java.util.List;

public interface ReviewService
{
    Review getById(ReviewIdentity reviewIdentity);
    List<Review> getAll();
    void save(Review review);
    void update(Review review);
    void delete(Review review);

}
