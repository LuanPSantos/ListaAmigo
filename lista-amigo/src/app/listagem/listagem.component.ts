import { Component, AfterViewInit} from '@angular/core';
import { ItemAmigo } from './ItemAmigo';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
import { Amigo } from './Amigo';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent {

  lestOpen: ItemAmigo = null;
  headers2: Headers;

  constructor(http: Http){

    this.headers2 = new Headers();
    this.headers2.append("systemId", "3");
    this.headers2.append("unidadeNegocio", "4");
    let stream = http.get('http://10.27.0.127:9000/api/rest/portabilidade/obterHistoricoEventosPortabilidade/52299',{
      headers: this.headers2
    });
    stream.subscribe(response => {
      let resp = response.json();

      
      for(let i = 0; i < resp.historicoEventosPortabilidade.length; i++){
        let n = resp.historicoEventosPortabilidade[i].codigoStatusBilhete;

        let a = new Amigo();
        a.nome = n;
        a.id = i;

        let item = new ItemAmigo();
        item.amigo = a;
        item.hidden = true;
        this.amigos.push(item);
      }
      
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
