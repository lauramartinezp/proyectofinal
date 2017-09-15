import { TestBed, inject } from '@angular/core/testing';

import { MisHistorietasService } from './mis-historietas.service';

describe('MisHistorietasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MisHistorietasService]
    });
  });

  it('should be created', inject([MisHistorietasService], (service: MisHistorietasService) => {
    expect(service).toBeTruthy();
  }));
});
