package com.bookzindaclub.web;

import com.bookzindaclub.model.Club;
import com.bookzindaclub.model.ClubMember;
import com.bookzindaclub.model.ClubMemberIdentity;
import com.bookzindaclub.services.ClubMemberService;
import com.bookzindaclub.services.ClubService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/clubmembers")
public class ClubMemberController {
    private ClubMemberService clubMemberService;
    private ClubService clubService;

    @Autowired
    public void setClubMemberService(ClubMemberService clubMemberService){
        this.clubMemberService = clubMemberService;
    }

    @Autowired
    public void setClubService(ClubService clubService){
        this.clubService = clubService;
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

    @GetMapping("/member")
    public List<Club> getClubsOfUser(@RequestParam int userId){
        List<Integer> clubList = new ArrayList<>();
        for(ClubMember member: clubMemberService.getAllFromUser(userId)){
            clubList.add(member.getClubMemberIdentity().getClubId());
        }
        return clubService.getAllClubsInList(clubList);
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
