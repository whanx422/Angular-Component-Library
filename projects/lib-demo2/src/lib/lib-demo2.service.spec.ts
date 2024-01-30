import { TestBed } from '@angular/core/testing';

import { LibDemo2Service } from './lib-demo2.service';

describe('LibDemo2Service', () => {
  let service: LibDemo2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibDemo2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
