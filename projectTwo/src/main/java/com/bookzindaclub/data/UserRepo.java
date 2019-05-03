package com.bookzindaclub.data;

import com.bookzindaclub.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User,Integer> {

}
