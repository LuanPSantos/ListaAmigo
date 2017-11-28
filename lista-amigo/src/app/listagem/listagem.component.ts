import { Component, AfterViewInit} from '@angular/core';
import { ItemAmigo } from './ItemAmigo';
import * as $ from 'jquery';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent {

  lestOpen: ItemAmigo = null;

  amigos: ItemAmigo[] = [
    {
      amigo: {
        id: 1, 
        nome: 'Luan'
      }, 
      hidden: true
    },
    {amigo: {id: 2, nome: 'Ana'}, hidden: true},
    {amigo: {id: 3, nome: 'Minon'}, hidden: true},
    {amigo: {id: 4, nome: 'Rosa'}, hidden: true}
  ];

  toggle(item: ItemAmigo){
    item.hidden = !item.hidden;

    if(this.lestOpen != null){
      this.lestOpen.hidden = true;
      this.lestOpen = item;
    }else{
      this.lestOpen = item;
    }
  }
}
