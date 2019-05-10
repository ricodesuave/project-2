package com.bookzindaclub.web;

import com.bookzindaclub.model.Club;
import com.bookzindaclub.services.ClubService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping(value = "/clubs")
public class ClubController {
    private ClubService clubService;

    @Autowired
    public void setClubService(ClubService clubService){
        this.clubService = clubService;
    }

    @GetMapping("/club")
    public Club getClub(@RequestParam int id){
        return clubService.getById(id);
    }

    @GetMapping("/name")
    public Club getClubByName(@RequestParam String name){
        return clubService.getByName(name);
    }

    @GetMapping("/clubs")
    public List<Club>  getClubs(){
        return clubService.getAll();
    }

    @GetMapping("/owner")
    public List<Club>  getUsersClubs(@RequestParam int ownerId ){
        return clubService.getAllByOwner(ownerId);
    }

    @PostMapping("/save")
    public Club insertClub(@RequestBody Club club){
        System.out.println(club);
        int id = clubService.newClub(club);
        club.setClubId(id);
        return club;
    }

    @DeleteMapping("/delete")
    public void  deleteClub(@RequestBody Club club){
        clubService.deleteClub(club);
    }

    @PutMapping("/update")
    public void updateClub(@RequestBody Club club){
        clubService.updateClub(club);
    }
}
