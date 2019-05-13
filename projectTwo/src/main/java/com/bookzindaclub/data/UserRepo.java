package com.bookzindaclub.data;

import com.bookzindaclub.model.Credentials;
import com.bookzindaclub.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<User,Integer>
{
    User getByEmail(String email);
    User getByFirstName(String firstName);
    User getByLastName(String lastName);
    User getByEmailAndPassword(String email, String password);
}
