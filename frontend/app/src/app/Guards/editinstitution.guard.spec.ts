import { TestBed } from '@angular/core/testing';

import { EditinstitutionGuard } from './editinstitution.guard';

describe('EditinstitutionGuard', () => {
  let guard: EditinstitutionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EditinstitutionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
