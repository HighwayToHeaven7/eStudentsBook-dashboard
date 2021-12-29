import { TestBed } from '@angular/core/testing';

import { EStudentsBookApiClientService } from './e-students-book-api-client.service';

describe('EStudentsBookApiClientService', () => {
  let service: EStudentsBookApiClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EStudentsBookApiClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
