package com.bookzindaclub.data;

import com.bookzindaclub.model.Review;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepo extends JpaRepository<Review, Integer>
{

}
