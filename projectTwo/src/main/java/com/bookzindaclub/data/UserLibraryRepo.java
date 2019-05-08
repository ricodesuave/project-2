package com.bookzindaclub.data;

import com.bookzindaclub.model.UserLibrary;
import com.bookzindaclub.model.UserLibraryIdentity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserLibraryRepo extends JpaRepository<UserLibrary, UserLibraryIdentity> {
}
