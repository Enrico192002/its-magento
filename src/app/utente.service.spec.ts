import { TestBed } from '@angular/core/testing';

import { UtenteService } from './utente.service';
import { Utente } from './utente';
import { LISTAUTENTI } from './lista-utenti';

describe('UtenteService', () => {
  let service: UtenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
