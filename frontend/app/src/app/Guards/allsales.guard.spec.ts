import { TestBed } from '@angular/core/testing';

import { AllsalesGuard } from './allsales.guard';

describe('AllsalesGuard', () => {
  let guard: AllsalesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AllsalesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
