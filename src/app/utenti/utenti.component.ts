import { Component, OnInit } from '@angular/core';
import { LISTAUTENTI } from '../listautenti';
import { Utente }from '../utente';

@Component({
  selector: 'app-utenti',
  templateUrl: './utenti.component.html',
  styleUrls: ['./utenti.component.css']
})
export class UtentiComponent implements OnInit {
  utente = LISTAUTENTI;
  selectedUtente?: Utente;


  constructor() { }

  ngOnInit(): void {
  }

  onSelect(utente: Utente): void {
    this.selectedUtente = utente;
  }


}

