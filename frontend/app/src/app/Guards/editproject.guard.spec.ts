import { TestBed } from '@angular/core/testing';

import { EditprojectGuard } from './editproject.guard';

describe('EditprojectGuard', () => {
  let guard: EditprojectGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EditprojectGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
