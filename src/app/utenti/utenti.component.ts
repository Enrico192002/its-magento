import { Component, OnInit } from '@angular/core';
import { Utente }from '../utente';
import { LISTAUTENTI } from '../lista-utenti';
import { UtenteService } from '../utente.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-utenti',
  templateUrl: './utenti.component.html',
  styleUrls: ['./utenti.component.css']
})
export class UtentiComponent implements OnInit {
  selectedHero?: Utente;

  utente: Utente[] = [];

  constructor(private utenteService: UtenteService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getUtente();
  }

  onSelect(utente: Utente): void {
    this.selectedHero = utente;
    this.messageService.add(`utentiComponent: Selected utente id=${utente.id}`);
  }


  getUtente(): void {
    this.utenteService.getUtente()
        .subscribe(utente => this.utente = utente);
  }

}

