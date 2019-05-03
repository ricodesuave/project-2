package com.bookzindaclub.model;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;

@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
@Entity
@IdClass(Review.idClass.class)
@Table(name = "review")
public class Review {
//    @ManyToOne(fetch = FetchType.EAGER)
//    @JoinColumn(name = "user_id")
//    private User user;
//
//    @ManyToOne(fetch = FetchType.EAGER)
//    @JoinColumn(name = "book_id")
//    private Book book;

    @Id
    private int userId;

    @Id
    private int bookId;

    public Review(int userId, int bookId)
    {
        this.userId = userId;
        this.bookId = bookId;
    }

    @Column(name = "review_description")
    private String reviewDescription;

    private int rating;

    @Column(name = "review_")
    private String reviewDate;

    static class idClass implements Serializable
    {
        private int userId;
        private int bookId;
    }
}