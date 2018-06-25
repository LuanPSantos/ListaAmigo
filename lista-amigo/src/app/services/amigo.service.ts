import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Amigo } from '../listagem/Amigo';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AmigoService {

    private url = 'http://localhost:8080/lista-amigo/app/amigo/';

    constructor(private http: HttpClient) {
    }

    salvar(amigo: Amigo): Observable<void> {
        return this.http.post<void>(this.url, amigo);
    }

    atualizar(amigo: Amigo): Observable<void> {
        return this.http.put<void>(this.url + amigo.id, amigo);
    }

    excluir(id: number): Observable<void> {
        return this.http.delete<void>(this.url + id);
    }

    buscarTodos(): Observable<Amigo[]> {
        return this.http.get<Amigo[]>(this.url);
    }

    buscarAmigo(id: number): Observable<Amigo> {
        return this.http.get<Amigo>(this.url + id);
    }
}
