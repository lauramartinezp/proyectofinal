import { TestBed, inject } from '@angular/core/testing';

import { RelateService } from './relate.service';

describe('RelateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RelateService]
    });
  });

  it('should be created', inject([RelateService], (service: RelateService) => {
    expect(service).toBeTruthy();
  }));
});
