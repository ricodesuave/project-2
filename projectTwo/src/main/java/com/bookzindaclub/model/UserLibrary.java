package com.bookzindaclub.model;


import lombok.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
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

//    @ManyToOne(fetch = FetchType.EAGER)
//    @OnDelete(action = OnDeleteAction.CASCADE)
//    @MapsId("userId")
//    private User user;
//
//    @ManyToOne(fetch = FetchType.EAGER)
//    @OnDelete(action = OnDeleteAction.CASCADE)
//    @MapsId("bookId")
//    private Book book;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name= "progress_id")
    private Progress progressId;

}
