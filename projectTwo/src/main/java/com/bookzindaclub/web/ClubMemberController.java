package com.bookzindaclub.web;

import com.bookzindaclub.model.ClubMember;
import com.bookzindaclub.model.ClubMemberIdentity;
import com.bookzindaclub.services.ClubMemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ClubMemberController {
    private ClubMemberService clubMemberService;

    @Autowired
    public void setClubMemberService(ClubMemberService clubMemberService){
        this.clubMemberService = clubMemberService;
    }

    @GetMapping("clubmember")
    public ClubMember getClubmember(@RequestParam int clubId, @RequestParam int userId){
        return clubMemberService.getById(new ClubMemberIdentity(clubId, userId));
    }

    @GetMapping("/clubmembers")
    public List<ClubMember> getClubMembers(){
        return clubMemberService.getAll();
    }

    @GetMapping("/clubmembers/club")
    public List<ClubMember> getClubMembersOfClub(@RequestParam int clubId){
        return clubMemberService.getAllFromClub(clubId);
    }

    @PostMapping("/clubmember")
    public ClubMember insertClub(@RequestBody ClubMember clubMember){
        clubMemberService.newClubMember(clubMember);
        return clubMember;
    }

    @DeleteMapping("/clubmember")
    public void  deleteClub(@RequestBody ClubMember clubMember){
        clubMemberService.deleteClubMember(clubMember);
    }

    @PutMapping("/clubmember")
    public void updateClub(@RequestBody ClubMember clubMember){
        clubMemberService.updateClubMember(clubMember);
    }

}
