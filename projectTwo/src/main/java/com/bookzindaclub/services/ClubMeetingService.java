package com.bookzindaclub.services;

import com.bookzindaclub.model.ClubMeeting;
import com.bookzindaclub.model.ClubMeetingIdentity;

import java.util.List;

public interface ClubMeetingService {
    ClubMeeting getById(ClubMeetingIdentity id);
    List<ClubMeeting> getAll();
    List<ClubMeeting> getAllFromClub(int id);
    void newClubMeeting(ClubMeeting clubMeeting);
    void deleteClubMeeting(ClubMeeting clubMeeting);
    void updateClubMeeting(ClubMeeting clubMeeting);
}
