package com.bookzindaclub.model;

import lombok.*;

import javax.jws.soap.SOAPBinding;
import javax.persistence.*;
import java.io.Serializable;

@NoArgsConstructor
@Getter
@Setter
@ToString
@EqualsAndHashCode
@Entity
@Table(name = "CLUBMEMBER")
public class ClubMember {
    @EmbeddedId
    private ClubMemberIdentity clubMemberIdentity;

    @ManyToOne(fetch = FetchType.EAGER)
    @MapsId("clubId")
    private Club club;

    @ManyToOne(fetch = FetchType.EAGER)
    @MapsId("userId")
    private User user;

    private String joinDate;
}