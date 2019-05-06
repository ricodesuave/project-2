package com.bookzindaclub.model;


import lombok.*;
import org.springframework.context.annotation.Bean;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@ToString
@EqualsAndHashCode
@Entity
@Table(name = "USERBOOKS")
public class UserLibrary {

    @EmbeddedId
    private UserLibraryIdentity userLibraryIdentity;

    @ManyToOne(fetch = FetchType.EAGER)
    @MapsId("userId")
    private User user;

    @ManyToOne(fetch = FetchType.EAGER)
    @MapsId("bookId")
    private Book book;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name= "PROGRESS_ID")
    private Progress progress;

}
