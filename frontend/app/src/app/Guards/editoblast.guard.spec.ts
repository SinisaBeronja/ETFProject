import { TestBed } from '@angular/core/testing';

import { EditoblastGuard } from './editoblast.guard';

describe('EditoblastGuard', () => {
  let guard: EditoblastGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EditoblastGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
