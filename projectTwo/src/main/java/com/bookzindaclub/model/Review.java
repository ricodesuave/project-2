package com.bookzindaclub.model;

import lombok.*;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
@Entity
@Table(name = "review")
public class Review
{
    @EmbeddedId
    private ReviewIdentity reviewIdentity;

    @ManyToOne(fetch = FetchType.EAGER)
    @MapsId("userId")
    private User user;

    @ManyToOne(fetch = FetchType.EAGER)
    @MapsId("bookId")
    private Book book;

    @Column(name = "review_description")
    private String reviewDescription;

    private int rating;

    @Column(name = "review_date")
    private String reviewDate;

}