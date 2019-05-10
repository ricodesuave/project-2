package com.bookzindaclub.web;

import com.bookzindaclub.model.ClubMember;
import com.bookzindaclub.model.ClubMemberIdentity;
import com.bookzindaclub.services.ClubMemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/clubmembers")
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

    @GetMapping("/club")
    public List<ClubMember> getClubMembersOfClub(@RequestParam int clubId){
        return clubMemberService.getAllFromClub(clubId);
    }

    @PostMapping("/save")
    public ClubMember insertClub(@RequestBody ClubMember clubMember){
        clubMemberService.newClubMember(clubMember);
        return clubMember;
    }

    @DeleteMapping("/delete")
    public void  deleteClub(@RequestBody ClubMember clubMember){
        clubMemberService.deleteClubMember(clubMember);
    }

    @PutMapping("/update")
    public void updateClub(@RequestBody ClubMember clubMember){
        clubMemberService.updateClubMember(clubMember);
    }

}
