import { TestBed } from '@angular/core/testing';

import { ProjectfilesviewGuard } from './projectfilesview.guard';

describe('ProjectfilesviewGuard', () => {
  let guard: ProjectfilesviewGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProjectfilesviewGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
