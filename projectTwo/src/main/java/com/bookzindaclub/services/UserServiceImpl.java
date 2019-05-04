package com.bookzindaclub.services;

import com.bookzindaclub.data.UserRepo;
import com.bookzindaclub.model.User;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class UserServiceImpl implements UserService
{
    UserRepo userRepo;

    @Autowired
    public void setUserRepo(UserRepo userRepo)
    {
        this.userRepo = userRepo;
    }

    @Override
    public User getById(int id) {
        return this.userRepo.getOne(id);
    }

    @Override
    public List<User> getAll() {
        return this.userRepo.findAll();
    }

    @Override
    public void save(User user) {
        this.userRepo.save(user);

    }

    @Override
    public void update(User user) {
        this.userRepo.save(user);
    }

    @Override
    public void delete(User user) {
        this.userRepo.delete(user);
    }

    @Override
    public User getByFirstName(String firstName)
    {
        return this.userRepo.getByFirstName(firstName);
    }

    @Override
    public User getByLastName(String lastName) {
        return this.userRepo.getByLastName(lastName);
    }

    @Override
    public User getByEmail(String email)
    {
        return this.userRepo.getByEmail(email);
    }
}
