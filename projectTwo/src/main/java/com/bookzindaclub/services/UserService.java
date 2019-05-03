package com.bookzindaclub.services;

import com.bookzindaclub.model.User;

import java.util.List;

public interface UserService
{
    User getById(int id);
    List<User> getAll();
    void save (User user);
    void update(User user);
    void delete(User user);

    User getByFirstName(String firstName);
    User getByLastName(String lastName);
    User getByEmail(String email);

}
