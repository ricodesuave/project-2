package com.bookzindaclub.services;

import com.bookzindaclub.data.UserLibraryRepo;
import com.bookzindaclub.model.UserLibrary;
import com.bookzindaclub.model.UserLibraryIdentity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserLibraryServiceImpl implements UserLibraryService {

    private UserLibraryRepo userLibraryRepo;

    @Autowired
    public void setUserLibraryRepo(UserLibraryRepo userLibraryRepo){
        this.userLibraryRepo=userLibraryRepo;
    }

    @Override
    public UserLibraryIdentity addOne(UserLibrary userLibrary) {
        UserLibrary userLibrary1 = this.userLibraryRepo.save(userLibrary);
        return userLibrary1.getUserLibraryIdentity();
    }

    @Override
    public List<UserLibrary> getAll() {
        return this.userLibraryRepo.findAll();
    }

    @Override
    public UserLibrary getOneById(UserLibraryIdentity userLibraryIdentity) {
        UserLibrary userLibrary= this.userLibraryRepo.findById(userLibraryIdentity).orElse(null);
        return userLibrary;
    }

    @Override
    public void updateOne(UserLibrary userLibrary) {
        this.userLibraryRepo.save(userLibrary);
    }

    @Override
    public void deleteOne(UserLibrary userLibrary) {
        this.userLibraryRepo.delete(userLibrary);
    }

    @Override
    public void deleteAll() {
        this.userLibraryRepo.deleteAll();
    }
}
