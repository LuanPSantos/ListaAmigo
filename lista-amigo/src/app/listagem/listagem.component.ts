import { Component, OnInit } from '@angular/core';
import { Amigo } from './Amigo';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  amigos: Amigo[] = [
    {id: null, nome: 'Luan'}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
