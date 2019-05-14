import { TestBed } from '@angular/core/testing';

import { GBAPIService } from './gbapi.service';

describe('GBAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GBAPIService = TestBed.get(GBAPIService);
    expect(service).toBeTruthy();
  });
});
