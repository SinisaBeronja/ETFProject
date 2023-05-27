import { TestBed } from '@angular/core/testing';

import { UploadFilesGuard } from './upload-files.guard';

describe('UploadFilesGuard', () => {
  let guard: UploadFilesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UploadFilesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
