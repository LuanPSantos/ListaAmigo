import { Component, AfterViewInit} from '@angular/core';
import { ItemAmigo } from './ItemAmigo';
import { Http } from '@angular/http';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent {

  lestOpen: ItemAmigo = null;

  constructor(http: Http){
    let stream = http.get('http://localhost:8080/lista-amigo/app/amigo/');
    stream.subscribe(response => {
      this.amigos = response.json();
      console.log(this.amigos);
    });
  }

  amigos: ItemAmigo[] = [
    // {
    //   amigo: {
    //     id: 1, 
    //     nome: 'Luan'
    //   }, 
    //   hidden: true
    // },
    // {amigo: {id: 2, nome: 'Ana'}, hidden: true},
    // {amigo: {id: 3, nome: 'Minon'}, hidden: true},
    // {amigo: {id: 4, nome: 'Rosa'}, hidden: true}
  ];

  toggle(item: ItemAmigo){
    
     if(this.lestOpen != null && this.lestOpen.hidden == false && this.lestOpen != item){
       this.lestOpen.hidden = true; 
     }

    item.hidden = !item.hidden;
    this.lestOpen = item;
  }
}
