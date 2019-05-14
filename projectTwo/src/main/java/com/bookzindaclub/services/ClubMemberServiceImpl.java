package com.bookzindaclub.services;

import com.bookzindaclub.data.ClubMemberRepo;
import com.bookzindaclub.model.ClubMember;
import com.bookzindaclub.model.ClubMemberIdentity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class ClubMemberServiceImpl implements ClubMemberService{
    private ClubMemberRepo clubMemberRepo;

    @Autowired
    public void setClubMemberRepo(ClubMemberRepo clubMemberRepo){
        this.clubMemberRepo = clubMemberRepo;
    }

    @Override
    @Transactional(readOnly = true, isolation = Isolation.READ_COMMITTED)
    public ClubMember getById(ClubMemberIdentity id) {
        return this.clubMemberRepo.findById(id).orElse(null);
    }

    @Override
    public List<ClubMember> getAll() {
        return this.clubMemberRepo.findAll();
    }

    @Override
    public List<ClubMember> getAllFromClub(int clubId) {
        return this.clubMemberRepo.findAllByClubMemberIdentity_ClubIdEquals(clubId);
    }

    @Override
    public void newClubMember(ClubMember clubMember) {
        this.clubMemberRepo.save(clubMember);
    }

    @Override
    public void deleteClubMember(ClubMember clubMember) {
        this.clubMemberRepo.delete(clubMember);
    }

    @Override
    public void updateClubMember(ClubMember clubMember) {
        this.clubMemberRepo.save(clubMember);
    }

    @Override
    public List<ClubMember> getAllFromUser(int userId) {
        return clubMemberRepo.findAllByClubMemberIdentity_UserIdEquals(userId);
    }
}
