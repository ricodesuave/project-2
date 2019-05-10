package com.bookzindaclub.model;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.validation.constraints.NotNull;
import java.io.Serializable;


@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
@Embeddable
public class UserLibraryIdentity implements Serializable {

    @NotNull
    protected int userId;

    @NotNull
    protected int bookId;

//    public UserLibraryIdentity( int userId, int bookId){
//        this.userId= userId;
//        this.bookId= bookId;
//    }
}


