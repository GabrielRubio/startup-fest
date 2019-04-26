import { TestBed } from '@angular/core/testing';

import { StartupsService } from './startups.service';

describe('StartupsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StartupsService = TestBed.get(StartupsService);
    expect(service).toBeTruthy();
  });
});
