import { TestBed } from '@angular/core/testing';

import { FieldNamesService } from './field-names.service';

describe('FieldNamesService', () => {
  let service: FieldNamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FieldNamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
