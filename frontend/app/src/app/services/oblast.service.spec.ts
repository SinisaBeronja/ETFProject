import { TestBed } from '@angular/core/testing';

import { OblastService } from './oblast.service';

describe('OblastService', () => {
  let service: OblastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OblastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
