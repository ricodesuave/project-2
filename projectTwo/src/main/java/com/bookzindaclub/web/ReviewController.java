package com.bookzindaclub.web;

import com.bookzindaclub.model.*;
import com.bookzindaclub.services.BookService;
import com.bookzindaclub.services.ReviewService;
import com.bookzindaclub.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/review")
public class ReviewController {

    private ReviewService reviewService;

    private BookService bookService;

    private UserService userService;

    @Autowired
    public void setReviewService(ReviewService reviewService){this.reviewService = reviewService;}

    @Autowired
    public void setBookService(BookService bookService) {
        this.bookService = bookService;
    }

    @Autowired
    public void setUserService(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("review")
    public Review getById(@RequestParam int userId, @RequestParam int bookId)
    {
        return reviewService.getById(new ReviewIdentity(userId,bookId));
    }

    @GetMapping("reviews")
    public List<ReviewTransfer> getAll()
    {
        List<Review> reviews = reviewService.getAll();
        List<Book> books = bookService.getAll();
        List<User> users = userService.getAll();


        List<ReviewTransfer> reviewTransfers = new ArrayList<>();

        for (Review review : reviews) {

            for (Book book : books) {

                if (review.getReviewIdentity().getBookId() == book.getBookId()) {
                    ReviewTransfer reviewTransfer = new ReviewTransfer();

                    for(User user: users)
                    {
                        if (review.getReviewIdentity().getUserId() == user.getUserId()){
                            reviewTransfer.setFirstName(user.getFirstName());
                            reviewTransfer.setLastName(user.getLastName());
                            break;
                        }
                    }

                    reviewTransfer.setTitle(book.getTitle());
                    reviewTransfer.setAuthor(book.getAuthor());
                    reviewTransfer.setRating(review.getRating());
                    reviewTransfer.setReviewDate(review.getReviewDate());
                    reviewTransfer.setReviewDescription(review.getReviewDescription());
                    reviewTransfers.add(reviewTransfer);
                    break;
                }
            }
        }
        return reviewTransfers;
    }

    @PostMapping("save")
    public void save(@RequestBody Review review)
    {reviewService.save(review);}

    @PutMapping("update")
    public void update(@RequestBody Review review)
    {reviewService.update(review);}

    @DeleteMapping("delete")
    public void delete(@RequestBody Review review)
    {reviewService.delete(review);}

}
