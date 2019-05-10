package com.bookzindaclub.services;

import com.bookzindaclub.model.ClubMember;
import com.bookzindaclub.model.ClubMemberIdentity;

import java.util.List;

public interface ClubMemberService {
    ClubMember getById(ClubMemberIdentity id);
    List<ClubMember> getAll();
    List<ClubMember> getAllFromClub(int clubId);
    void newClubMember(ClubMember clubMember);
    void deleteClubMember(ClubMember clubMember);
    void updateClubMember(ClubMember clubMember);
}
