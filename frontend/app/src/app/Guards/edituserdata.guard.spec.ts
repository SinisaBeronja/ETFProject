import { TestBed } from '@angular/core/testing';

import { EdituserdataGuard } from './edituserdata.guard';

describe('EdituserdataGuard', () => {
  let guard: EdituserdataGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EdituserdataGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
