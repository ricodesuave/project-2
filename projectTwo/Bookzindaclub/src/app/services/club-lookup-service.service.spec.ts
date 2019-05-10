import { TestBed } from '@angular/core/testing';

import { ClubLookupServiceService } from './club-lookup-service.service';

describe('ClubLookupServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClubLookupServiceService = TestBed.get(ClubLookupServiceService);
    expect(service).toBeTruthy();
  });
});
