package com.bookzindaclub.web;

import com.bookzindaclub.model.UserLibrary;
import com.bookzindaclub.model.UserLibraryIdentity;
import com.bookzindaclub.services.UserLibraryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/userbook")
public class UserLibraryController {

    private UserLibraryService userLibraryService;

    @Autowired
    public void setUserLibraryService(UserLibraryService userLibraryService){
        this.userLibraryService= userLibraryService;
    }

    @GetMapping("books")
    public List<UserLibrary> getAllUserBooks(){return userLibraryService.getAll();}

    @GetMapping("book")
    public UserLibrary getOneById(@RequestParam int userid, @RequestParam int bookid){
        return userLibraryService.getOneById( new UserLibraryIdentity(userid, bookid));
    }
    @PutMapping("update")
    public void updateOne(@RequestBody UserLibrary userLibrary){
        userLibraryService.updateOne(userLibrary);
    }

    @PostMapping("add")
    public UserLibraryIdentity addOne(@RequestBody UserLibrary userLibrary){
        return userLibraryService.addOne(userLibrary);
    }

    @DeleteMapping("delete")
    public void deleteOne(@RequestBody UserLibrary userLibrary){userLibraryService.deleteOne(userLibrary);}

    @DeleteMapping("delete/all")
    public void deleteAll(){userLibraryService.deleteAll();}
}
