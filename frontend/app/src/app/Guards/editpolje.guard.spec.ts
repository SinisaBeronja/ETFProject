import { TestBed } from '@angular/core/testing';

import { EditpoljeGuard } from './editpolje.guard';

describe('EditpoljeGuard', () => {
  let guard: EditpoljeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EditpoljeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
