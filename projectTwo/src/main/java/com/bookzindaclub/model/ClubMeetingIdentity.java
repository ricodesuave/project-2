package com.bookzindaclub.model;

import lombok.*;

import java.io.Serializable;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
public class ClubMeetingIdentity implements Serializable {
    private int clubId;
    private String dateTime;
}
