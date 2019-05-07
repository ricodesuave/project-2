package com.bookzindaclub.services;

import com.bookzindaclub.data.ReviewRepo;
import com.bookzindaclub.model.Review;
import com.bookzindaclub.model.ReviewIdentity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class ReviewServiceImpl implements ReviewService
{
    ReviewRepo reviewRepo;

    @Autowired
    public void setReviewRepo(ReviewRepo reviewRepo)
    {
        this.reviewRepo = reviewRepo;
    }

    @Override
    @Transactional(readOnly=true, isolation= Isolation.READ_COMMITTED)
    public Review getById(ReviewIdentity reviewIdentity) {
        return this.reviewRepo.getOne(reviewIdentity);
    }

    @Override
    public List<Review> getAll()
    {
        System.out.println("hello");

        List<Review> reviews = this.reviewRepo.findAll();

        for(int i = 0; i < reviews.size(); i++)
            System.out.println(reviews.get(i));

        return this.reviewRepo.findAll();
    }

    @Override
    public void save(Review review) {
        this.reviewRepo.save(review);
    }

    @Override
    public void update(Review review) {
        this.reviewRepo.save(review);
    }

    @Override
    public void delete(Review review) {
        this.reviewRepo.delete(review);
    }
}
