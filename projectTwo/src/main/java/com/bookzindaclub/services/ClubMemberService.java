package com.bookzindaclub.services;

import com.bookzindaclub.model.ClubMember;
import com.bookzindaclub.model.ClubMemberIdentity;

import java.util.List;

public interface ClubMemberService {
    ClubMember getById(ClubMemberIdentity id);
    List<ClubMember> getAll();
    List<ClubMember> getAllByClub(int clubId);
    void newClubMeeting(ClubMember clubMember);
    void deleteClubMeeting(ClubMember clubMember);
    void updateClubMeeting(ClubMember clubMember);
}
