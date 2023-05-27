import { TestBed } from '@angular/core/testing';

import { ProjectstatusGuard } from './projectstatus.guard';

describe('ProjectstatusGuard', () => {
  let guard: ProjectstatusGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProjectstatusGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
