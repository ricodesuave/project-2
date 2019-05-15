package com.bookzindaclub.web;

import com.bookzindaclub.model.*;
import com.bookzindaclub.services.ClubMeetingService;
import com.bookzindaclub.services.ClubMemberService;
import com.bookzindaclub.services.ClubService;
import com.bookzindaclub.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.AutoConfigureOrder;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/clubmeetings")
public class ClubMeetingController {

    private ClubMeetingService clubMeetingService;

    private UserService userService;

    private ClubService clubService;

    private ClubMemberService clubMemberService;

    @Autowired
    public void setClubMeetingService(ClubMeetingService clubMeetingService){
        this.clubMeetingService = clubMeetingService;
    }

    @Autowired
    public void setUserService(UserService userService) {
        this.userService = userService;
    }

    @Autowired
    public void setClubMemberService(ClubMemberService clubMemberService) {
        this.clubMemberService = clubMemberService;
    }

    @Autowired
    public void setClubService(ClubService clubService) {
        this.clubService = clubService;
    }

    @GetMapping("clubmeeting")
    public ClubMeeting getClubMeeting(@RequestParam int clubId, @RequestParam String dateTime){
        return clubMeetingService.getById(new ClubMeetingIdentity(clubId, dateTime));
    }

    @GetMapping("/clubmeetings")
    public List<ClubMeetingTransfer> getClubMeetings(@RequestParam int userId ){

        List<ClubMember> clubMembers = clubMemberService.getAllFromUser(userId);

        //to reduce database transactions
        List<ClubMeeting> clubMeetings = clubMeetingService.getAll();
        List<Club> clubs = clubService.getAll();

        List<ClubMeetingTransfer> clubMeetingTransfers = new ArrayList<>();

        for(ClubMeeting clubMeeting: clubMeetings){

            for(ClubMember clubMember: clubMembers){

                if(clubMember.getClubMemberIdentity().getClubId() == clubMeeting.getClubMeetingIdentity().getClubId()){

                    ClubMeetingTransfer clubMeetingTransfer = new ClubMeetingTransfer();

                    for(Club club: clubs){
                        if(clubMeeting.getClubMeetingIdentity().getClubId() == club.getClubId()){
                            clubMeetingTransfer.setClubName(club.getClubName());
                        }
                    }

                    clubMeetingTransfer.setDate(clubMeeting.getClubMeetingIdentity().getDateTime());
                    clubMeetingTransfer.setLocation(clubMeeting.getLocation());
                    clubMeetingTransfer.setDescription(clubMeeting.getDescription());

                    clubMeetingTransfers.add(clubMeetingTransfer);
                }
            }
        }

        return clubMeetingTransfers;
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
