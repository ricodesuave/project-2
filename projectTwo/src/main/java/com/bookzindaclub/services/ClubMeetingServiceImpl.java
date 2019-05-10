package com.bookzindaclub.services;

import com.bookzindaclub.data.ClubMeetingRepo;
import com.bookzindaclub.model.ClubMeeting;
import com.bookzindaclub.model.ClubMeetingIdentity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Service
@Transactional
public class ClubMeetingServiceImpl implements ClubMeetingService {
    private ClubMeetingRepo clubMeetingRepo;

    @Autowired
    public void setClubMeetingRepo(ClubMeetingRepo clubMeetingRepo){
        this.clubMeetingRepo = clubMeetingRepo;
    }

    @Override
    @Transactional(readOnly = true, isolation = Isolation.READ_COMMITTED)
    public ClubMeeting getById(ClubMeetingIdentity id) {
        return this.clubMeetingRepo.findById(id).orElse(null);
    }

    @Override
    public List<ClubMeeting> getAll() {
        return this.clubMeetingRepo.findAll();
    }

    @Override
    public List<ClubMeeting> getAllFromClub(int id) {
        return this.clubMeetingRepo.findAllByClubMeetingIdentity_ClubId(id);
    }

    @Override
    public void newClubMeeting(ClubMeeting clubMeeting) {
        this.clubMeetingRepo.save(clubMeeting);
    }

    @Override
    public void deleteClubMeeting(ClubMeeting clubMeeting) {
        this.clubMeetingRepo.delete(clubMeeting);
    }

    @Override
    public void updateClubMeeting(ClubMeeting clubMeeting) {
        this.clubMeetingRepo.save(clubMeeting);
    }
}
