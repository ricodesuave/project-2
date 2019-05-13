package com.bookzindaclub.web;

import com.bookzindaclub.model.User;
import com.bookzindaclub.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/user")
public class UserController
{
    private UserService userService;

    @Autowired
    public void setUserService(UserService userService){this.userService = userService;}

    //Get by ID
    @GetMapping("user")
    public User user(@RequestParam int userId){ return userService.getById(userId);}

    //Get all users
    @GetMapping("users")
    public List<User> getUsers(){return userService.getAll(); }

    //Save user
    @PostMapping("save")
    public void save(@RequestBody User user){userService.save(user);}

    //Update user
    @PutMapping("update")
    public void update(@RequestBody User user){userService.update(user);}

    //delete user by id
    @DeleteMapping("delete")
    public void delete(@RequestBody User user){userService.delete(user);}

    //Get user by first name
    @GetMapping("firstname")
    public User getByFirstName(@RequestBody User user){return userService.getByFirstName(user.getFirstName());}

    //Get user by last name
    @GetMapping("lastname")
    public User getByLastName(@RequestBody User user){return userService.getByLastName(user.getLastName());}

    //get single user by email
    @PostMapping("email")
    public User getUserByEmail(@RequestBody User user){return userService.getByEmail(user.getEmail());}
}
