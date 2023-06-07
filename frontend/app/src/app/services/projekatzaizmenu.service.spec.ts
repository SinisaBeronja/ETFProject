import { TestBed } from '@angular/core/testing';

import { ProjekatzaizmenuService } from './projekatzaizmenu.service';

describe('ProjekatzaizmenuService', () => {
  let service: ProjekatzaizmenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjekatzaizmenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
