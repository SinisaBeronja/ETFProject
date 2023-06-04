import { TestBed } from '@angular/core/testing';

import { PoljaGuard } from './polja.guard';

describe('PoljaGuard', () => {
  let guard: PoljaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PoljaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
