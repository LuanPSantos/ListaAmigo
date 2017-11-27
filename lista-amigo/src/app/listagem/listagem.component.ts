import { Component, AfterViewInit} from '@angular/core';
import { Amigo } from './Amigo';
import * as $ from 'jquery';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent {

  amigos: Amigo[] = [
    {id: null, nome: 'Luan'},
    {id: null, nome: 'Ana'},
    {id: null, nome: 'Minion'},
    {id: null, nome: 'Rosa'}
  ];
}
