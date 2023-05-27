import { TestBed } from '@angular/core/testing';

import { EdituserGuard } from './edituser.guard';

describe('EdituserGuard', () => {
  let guard: EdituserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EdituserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
