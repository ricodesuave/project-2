package com.bookzindaclub.services;

import com.bookzindaclub.data.ClubRepo;
import com.bookzindaclub.model.Club;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;


import java.util.List;

@Service
@Transactional
public class ClubServiceImpl implements ClubService {
    ClubRepo clubRepo;

    @Autowired
    public void setClubRepo(ClubRepo clubRepo){
        this.clubRepo = clubRepo;
    }

    @Override
    @Transactional(readOnly = true, isolation = Isolation.READ_COMMITTED)
    public Club getById(int id) {
        Club c = this.clubRepo.findById(id).orElse(null);
        return c;
    }

    @Override
    public Club getByName(String name) {
        return this.clubRepo.findByClubNameEquals(name);
    }

    @Override
    public List<Club> getAll() {
        return this.clubRepo.findAll();
    }

    @Override
    public List<Club> getAllByOwner(int ownerId) {
        return this.clubRepo.findAllByOwnerEquals(ownerId);
    }

    @Override
    public int newClub(Club c) {
        c = this.clubRepo.save(c);
        return c.getClubId();
    }

    @Override
    public void deleteClub(Club c) {
        this.clubRepo.delete(c);
    }

    @Override
    public void updateClub(Club c) {
        this.clubRepo.save(c);
    }
}
