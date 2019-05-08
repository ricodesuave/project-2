package com.bookzindaclub.services;

import com.bookzindaclub.data.UserRepo;
import com.bookzindaclub.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import java.beans.Transient;
import java.util.List;

@Service
public class UserServiceImpl implements UserService
{
    UserRepo userRepo;

    @Autowired
    public void setUserRepo(UserRepo userRepo)
    {
        this.userRepo = userRepo;
    }

    //Obtain user by id
    @Override
    @Transactional(readOnly = true, isolation = Isolation.READ_COMMITTED)
    public User getById(int id) {
        return this.userRepo.findById(id).orElse(null);
    }

    //Get all users
    @Override
    public List<User> getAll() {
        return this.userRepo.findAll();
    }

    //Save user
    @Override
    public void save(User user) {
        this.userRepo.save(user);

    }

    //update user
    @Override
    public void update(User user) {
        this.userRepo.save(user);
    }

    //delete user
    @Override
    public void delete(User user) {
        this.userRepo.delete(user);
    }

    //User by First name
    @Override
    public User getByFirstName(String firstName)
    {
        return this.userRepo.getByFirstName(firstName);
    }

    //User by last name
    @Override
    public User getByLastName(String lastName) {
        return this.userRepo.getByLastName(lastName);
    }

    //User by email
    @Override
    public User getByEmail(String email)
    {
        return this.userRepo.getByEmail(email);
    }
}
