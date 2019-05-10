package com.bookzindaclub.web;

import com.bookzindaclub.model.Club;
import com.bookzindaclub.model.ClubMeeting;
import com.bookzindaclub.model.ClubMeetingIdentity;
import com.bookzindaclub.services.ClubMeetingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/clubmeetings")
public class ClubMeetingController {
    private ClubMeetingService clubMeetingService;

    @Autowired
    public void setClubMeetingService(ClubMeetingService clubMeetingService){
        this.clubMeetingService = clubMeetingService;
    }

    @GetMapping("clubmeeting")
    public ClubMeeting getClubMeeting(@RequestParam int clubId, @RequestParam String dateTime){
        return clubMeetingService.getById(new ClubMeetingIdentity(clubId, dateTime));
    }

    @GetMapping("/clubmeetings")
    public List<ClubMeeting> getClubMeetings(){
        return clubMeetingService.getAll();
    }

    @GetMapping("/club")
    public List<ClubMeeting> getClubMeetingsOfClub(@RequestParam int clubId){
        return clubMeetingService.getAllFromClub(clubId);
    }

    @PostMapping("/save")
    public ClubMeeting insertClub(@RequestBody ClubMeeting clubMeeting){
        clubMeetingService.newClubMeeting(clubMeeting);
        return clubMeeting;
    }

    @DeleteMapping("/delete")
    public void  deleteClub(@RequestBody ClubMeeting clubMeeting){
        clubMeetingService.deleteClubMeeting(clubMeeting);
    }

    @PutMapping("/update")
    public void updateClub(@RequestBody ClubMeeting clubMeeting){
        clubMeetingService.updateClubMeeting(clubMeeting);
    }
}
