import { TestBed } from '@angular/core/testing';

import { StaduimService } from './staduim.service';

describe('StaduimService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StaduimService = TestBed.get(StaduimService);
    expect(service).toBeTruthy();
  });
});
