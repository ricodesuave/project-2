import { TestBed } from '@angular/core/testing';

import { ClubMemberService } from './club-member.service';

describe('ClubMemberService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClubMemberService = TestBed.get(ClubMemberService);
    expect(service).toBeTruthy();
  });
});
