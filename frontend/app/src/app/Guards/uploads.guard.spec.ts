import { TestBed } from '@angular/core/testing';

import { UploadsGuard } from './uploads.guard';

describe('UploadsGuard', () => {
  let guard: UploadsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UploadsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
