package com.bookzindaclub.model;

import lombok.*;

import javax.persistence.Embeddable;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
@Embeddable
public class ClubMeetingIdentity implements Serializable {
    @NotNull
    private int clubId;
    @NotNull
    private String dateTime;
}
