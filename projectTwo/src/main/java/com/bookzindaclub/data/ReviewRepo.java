package com.bookzindaclub.data;

import com.bookzindaclub.model.Review;
import com.bookzindaclub.model.ReviewIdentity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ReviewRepo extends JpaRepository<Review, ReviewIdentity>
{

}
