import { TestBed } from '@angular/core/testing';

import { PoljeService } from './polje.service';

describe('PoljeService', () => {
  let service: PoljeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoljeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
