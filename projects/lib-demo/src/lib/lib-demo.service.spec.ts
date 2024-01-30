import { TestBed } from '@angular/core/testing';

import { LibDemoService } from './lib-demo.service';

describe('LibDemoService', () => {
  let service: LibDemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibDemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
