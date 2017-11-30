import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { AmigoService } from '../services/amigo.service';
import { Amigo } from '../listagem/Amigo';

@Component({
    selector: 'app-atualiza',
    styleUrls: ['./atualizar.component.css'],
    templateUrl: './atualizar.component.html',
    providers: [ AmigoService ]
})
export class AtualizarComponent{

    activatedRoute: ActivatedRoute;
    router: Router;
    service: AmigoService;
    amigo: Amigo;
    

    constructor(activatedRoute: ActivatedRoute, router: Router, service: AmigoService){
        this.service = service;
        this.router = router;
        this.activatedRoute = activatedRoute;

        this.amigo = new Amigo();
        this.amigo.id = -1;
        this.amigo.nome = "";

        this.activatedRoute.queryParams.subscribe(params => {
            const id: number = params['id'];
            
            this.amigo = this.service.buscarAmigo(id);
        });
    }

    salvar(){
        this.service.atualizar(this.amigo);
    }
}
