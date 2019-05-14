package com.bookzindaclub.data;

import com.bookzindaclub.model.Club;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ClubRepo extends JpaRepository<Club, Integer> {
    Club findByClubNameEquals(String clubName);
    List<Club> findAllByOwner_UserIdEquals(int ownerId);
    List<Club> findAllByClubIdIn(List<Integer> clubIds);
}