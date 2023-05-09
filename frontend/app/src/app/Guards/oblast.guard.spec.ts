import { TestBed } from '@angular/core/testing';

import { OblastGuard } from './oblast.guard';

describe('OblastGuard', () => {
  let guard: OblastGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OblastGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
