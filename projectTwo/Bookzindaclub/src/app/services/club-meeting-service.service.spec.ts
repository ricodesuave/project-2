import { TestBed } from '@angular/core/testing';

import { ClubMeetingServiceService } from './club-meeting-service.service';

describe('ClubMeetingServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClubMeetingServiceService = TestBed.get(ClubMeetingServiceService);
    expect(service).toBeTruthy();
  });
});
