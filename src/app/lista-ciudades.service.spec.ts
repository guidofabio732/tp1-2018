import { TestBed, inject } from '@angular/core/testing';

import { ListaCiudadesService } from './lista-ciudades.service';

describe('ListaCiudadesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListaCiudadesService]
    });
  });

  it('should be created', inject([ListaCiudadesService], (service: ListaCiudadesService) => {
    expect(service).toBeTruthy();
  }));
});
