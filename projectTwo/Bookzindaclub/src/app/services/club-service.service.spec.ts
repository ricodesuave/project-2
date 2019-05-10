import { TestBed } from '@angular/core/testing';

import { ClubServiceService } from './club-service.service';

describe('ClubServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClubServiceService = TestBed.get(ClubServiceService);
    expect(service).toBeTruthy();
  });
});
