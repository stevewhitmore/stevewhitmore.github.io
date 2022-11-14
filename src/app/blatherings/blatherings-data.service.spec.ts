import { TestBed } from '@angular/core/testing';

import { BlatheringsDataService } from './blatherings-data.service';

describe('BlatheringsDataService', () => {
  let service: BlatheringsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlatheringsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
