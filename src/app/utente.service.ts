import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Utente } from './utente';
import { LISTAUTENTI } from './lista-utenti';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class UtenteService {

  constructor(private messageService: MessageService) { }

  getUtente(): Observable<Utente[]> {
    const utente = of(LISTAUTENTI);
    this.messageService.add('UtenteService: fetched heroes');
    return utente;

}
}
