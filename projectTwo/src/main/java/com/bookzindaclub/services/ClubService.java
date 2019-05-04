package com.bookzindaclub.services;

import com.bookzindaclub.model.Club;

import java.util.List;

public interface ClubService {
    Club getById(int id);
    Club getByName(String name);
    List<Club> getAll();
    List<Club> getAllByOwner(int ownerId);
    int newClub(Club c);
    void deleteClub(Club c);
    void updateClub(Club c);
}