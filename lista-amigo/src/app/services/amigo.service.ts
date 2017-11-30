import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Amigo } from '../listagem/Amigo';
import { ItemAmigo } from '../listagem/ItemAmigo';

@Injectable()
export class AmigoService{

    private http: Http;
    private router: Router;
    private url: string = 'http://localhost:8080/lista-amigo/app/amigo/';

    constructor(http: Http, router: Router){
        this.http = http;
        this.router = router;
    }

    salvar(amigo: Amigo){
        const headers: Headers = new Headers;
        headers.append('Content-Type', 'application/json');

        this.http.post(this.url, amigo, {headers: headers})
        .subscribe(res => {
            console.log(res);
            this.router.navigate(['/']);
        });
    }

    atualizar(amigo: Amigo){

        const headers: Headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.http.put(this.url + amigo.id, JSON.stringify(amigo), { headers: headers })
        .subscribe(res => {
            console.log(res);
            this.router.navigate(['/']);
        });
    }

    excluir(amigo: Amigo){

        this.http.delete(this.url + amigo.id)
          .subscribe(res => {
            console.log(res);
          });
    }

    buscarTodos(): ItemAmigo[]{
        const itens: ItemAmigo[] = [];

        this.http.get(this.url)
        .subscribe(res => {
          console.log(res);
          const amigosResponse: Amigo[] = res.json();
    
          amigosResponse.forEach(amigo => {
            const item: ItemAmigo = new ItemAmigo();
            item.amigo = amigo;
            item.hidden = true;
            itens.push(item);
          });
    
        });
        return itens;
    }

    buscarAmigo(id: number): Amigo{
        const amigo: Amigo = new Amigo();

        this.http.get(this.url + id)
        .subscribe(res => {
          let temp: Amigo = res.json();
          
          amigo.id = temp.id;
          amigo.nome = temp.nome;
        });
        return amigo;
    }
}
