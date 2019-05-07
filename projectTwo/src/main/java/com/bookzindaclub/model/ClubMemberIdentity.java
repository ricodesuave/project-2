package com.bookzindaclub.model;


import lombok.*;



import javax.persistence.Embeddable;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@EqualsAndHashCode
@Embeddable
public class ClubMemberIdentity implements Serializable {
    @NotNull
    protected int clubId;
    @NotNull
    protected int userId;
}
