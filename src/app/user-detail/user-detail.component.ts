import { Component, OnInit, Input} from '@angular/core';
import { Utente } from '../utente';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Input() utente?: Utente;

  constructor() { }

  ngOnInit(): void {
  }

}
