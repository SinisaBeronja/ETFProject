import { TestBed } from '@angular/core/testing';

import { AllusersGuard } from './allusers.guard';

describe('AllusersGuard', () => {
  let guard: AllusersGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AllusersGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
