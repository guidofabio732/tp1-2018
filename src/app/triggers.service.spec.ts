import { TestBed, inject } from '@angular/core/testing';

import { TriggersService } from './triggers.service';

describe('TriggersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TriggersService]
    });
  });

  it('should be created', inject([TriggersService], (service: TriggersService) => {
    expect(service).toBeTruthy();
  }));
});
