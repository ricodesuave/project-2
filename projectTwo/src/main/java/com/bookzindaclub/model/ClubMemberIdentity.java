package com.bookzindaclub.model;


import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class ClubMemberIdentity implements Serializable {
    protected int clubId;
    protected int userId;
}
