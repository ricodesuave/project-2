package com.bookzindaclub.data;

import com.bookzindaclub.model.ClubMeeting;
import com.bookzindaclub.model.ClubMeetingIdentity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ClubMeetingRepo extends JpaRepository<ClubMeeting, ClubMeetingIdentity> {
    //List<ClubMeeting> findAllByClubIdEquals(int clubId);
}