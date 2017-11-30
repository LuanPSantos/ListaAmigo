import { Component } from '@angular/core';
import { Amigo } from '../listagem/Amigo';
import { AmigoService } from '../services/amigo.service';

@Component({
    selector: 'app-cadastro',
    styleUrls: ['./cadastro.component.css'],
    templateUrl: './cadastro.component.html',
    providers: [ AmigoService ]
})
export class CadastroComponent{

    amigo: Amigo = new Amigo();
    service: AmigoService;

    constructor(service: AmigoService){
        this.service = service;

        this.amigo.id = null;
        this.amigo.nome = "";
    }

    salvar(nome: string){
        console.log(nome);

        this.service.salvar(this.amigo);
    }
}

