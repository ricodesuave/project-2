package com.bookzindaclub.model;


import lombok.*;

import javax.persistence.*;
import java.util.Set;

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

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name= "PROGRESS_ID")
    private int progressId;

}
