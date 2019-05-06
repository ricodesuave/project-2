package com.bookzindaclub.data;

import com.bookzindaclub.model.ClubMember;
import com.bookzindaclub.model.ClubMemberIdentity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ClubMemberRepo extends JpaRepository<ClubMember, ClubMemberIdentity> {
    //List<ClubMember> findAllByClubIdEquals(int clubId);
}