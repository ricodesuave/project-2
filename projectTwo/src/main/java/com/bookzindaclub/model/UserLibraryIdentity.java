package com.bookzindaclub.model;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Embeddable;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

@Embeddable
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
public class UserLibraryIdentity implements Serializable {
    @NotNull
    private int userId;

    @NotNull
    private int bookId;

    public UserLibraryIdentity( int userId, int bookId){
        this.userId= userId;
        this.bookId= bookId;
    }

}
