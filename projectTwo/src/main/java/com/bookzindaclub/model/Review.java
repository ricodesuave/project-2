package com.bookzindaclub.model;

import lombok.*;
import org.springframework.jmx.export.annotation.ManagedOperation;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
@Entity
@Table(name = "review", schema = "public")
public class Review
{
    @EmbeddedId
    private ReviewIdentity reviewIdentity;

    @Column(name = "review_description")
    private String reviewDescription;

    private int rating;

    @Column(name = "review_date")
    private String reviewDate;

}