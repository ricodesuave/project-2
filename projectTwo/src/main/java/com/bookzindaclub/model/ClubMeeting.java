package com.bookzindaclub.model;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;


@NoArgsConstructor
@Getter
@Setter
@ToString
@EqualsAndHashCode
@Entity
@Table(name = "CLUBMEETING")
public class ClubMeeting {
    @EmbeddedId
    private ClubMeetingIdentity id;

    @ManyToOne(fetch = FetchType.EAGER)
    @MapsId("clubId")
    private Club club;


    private String location;
    private String description;
}
