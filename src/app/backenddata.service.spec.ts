import { TestBed, inject } from '@angular/core/testing';

import { BackenddataService } from './backenddata.service';

describe('BackenddataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BackenddataService]
    });
  });

  it('should be created', inject([BackenddataService], (service: BackenddataService) => {
    expect(service).toBeTruthy();
  }));
});
