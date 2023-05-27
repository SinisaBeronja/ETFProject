import { TestBed } from '@angular/core/testing';

import { LostpasswordGuard } from './lostpassword.guard';

describe('LostpasswordGuard', () => {
  let guard: LostpasswordGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LostpasswordGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
