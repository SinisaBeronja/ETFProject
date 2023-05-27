import { TestBed } from '@angular/core/testing';

import { AllprojectsGuard } from './allprojects.guard';

describe('AllprojectsGuard', () => {
  let guard: AllprojectsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AllprojectsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
