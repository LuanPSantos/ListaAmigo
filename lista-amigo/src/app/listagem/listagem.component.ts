import { Component, AfterViewInit } from '@angular/core';
import { ItemAmigo } from './ItemAmigo';
import { Http, Headers } from '@angular/http';
import { Amigo } from './Amigo';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent {

  lestOpen: ItemAmigo = null;
  headers2: Headers;
  http: Http;

  constructor(http: Http) {
    this.http = http;
    const stream = http.get('http://localhost:8080/lista-amigo/app/amigo/');
    stream.subscribe(response => {
      const amigosResponse: Amigo[] = response.json();

      amigosResponse.forEach(amigo => {
        const temp: ItemAmigo = new ItemAmigo();
        temp.amigo = amigo;
        temp.hidden = true;
        this.amigos.push(temp);
      });

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

  toggle(item: ItemAmigo) {

    if (this.lestOpen != null && this.lestOpen.hidden === false && this.lestOpen !== item) {
      this.lestOpen.hidden = true;
    }

    item.hidden = !item.hidden;
    this.lestOpen = item;
  }

  editar(item: ItemAmigo) {
    this.toggle(item);

    // const a = new Amigo();
    // a.id = item.amigo.id;
    // a.nome = 'Souza';

    // const url: string = 'http://localhost:8080/lista-amigo/app/amigo/' + item.amigo.id;
    // console.log(url);
    // const headers: Headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    // this.http.put(url, JSON.stringify(item.amigo), { headers: headers })
    //   .subscribe(res => {
    //     console.log(res);
    //   });

    // item.amigo = a;
  }

  excluir(item: ItemAmigo) {
    this.toggle(item);

    const url: string = 'http://localhost:8080/lista-amigo/app/amigo/' + item.amigo.id;
    this.http.delete(url)
      .subscribe(res => {
        console.log(res);
      });

    this.amigos.splice(this.amigos.indexOf(item), 1);
  }
}
