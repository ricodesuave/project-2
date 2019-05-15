import { TestBed } from '@angular/core/testing';

import { MeetingPostService } from './meeting-post.service';

describe('MeetingPostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MeetingPostService = TestBed.get(MeetingPostService);
    expect(service).toBeTruthy();
  });
});
