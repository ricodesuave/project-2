package com.bookzindaclub.model;

import lombok.*;

import javax.persistence.Embeddable;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

@Embeddable
@NoArgsConstructor
@Setter
@Getter
@AllArgsConstructor
@EqualsAndHashCode
public class ReviewIdentity implements Serializable
{
    @NotNull
    private int userId;

    @NotNull
    private int bookId;

}
