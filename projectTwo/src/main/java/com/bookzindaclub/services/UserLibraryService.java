package com.bookzindaclub.services;

import com.bookzindaclub.model.UserLibrary;
import com.bookzindaclub.model.UserLibraryIdentity;

import java.util.List;

public interface UserLibraryService {
    UserLibraryIdentity addOne(UserLibrary userLibrary);
    List<UserLibrary> getAll();
    UserLibrary getOneById(UserLibraryIdentity userLibraryIdentity);
    void updateOne(UserLibrary userLibrary);
    //UserLibrary getOneById(int userID, int bookId);
    void deleteOne(UserLibrary userLibrary);
    void deleteAll();
}
