import { TestBed } from '@angular/core/testing';

import { FieldNamesGuard } from './field-names.guard';

describe('FieldNamesGuard', () => {
  let guard: FieldNamesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FieldNamesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
