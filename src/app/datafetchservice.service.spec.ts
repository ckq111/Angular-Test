import { TestBed, inject } from '@angular/core/testing';

import { DatafetchserviceService } from './datafetchservice.service';

describe('DatafetchserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatafetchserviceService]
    });
  });

  it('should be created', inject([DatafetchserviceService], (service: DatafetchserviceService) => {
    expect(service).toBeTruthy();
  }));
});
