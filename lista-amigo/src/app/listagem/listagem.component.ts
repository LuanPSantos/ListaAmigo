import { Component, AfterViewInit } from '@angular/core';
import { ItemAmigo } from './ItemAmigo';
import { Router } from '@angular/router';
import { Amigo } from './Amigo';
import { AmigoService } from '../services/amigo.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css'],
  providers: [ AmigoService ]
})
export class ListagemComponent {

  lestOpen: ItemAmigo = null;
  service: AmigoService;
  amigos: ItemAmigo[] = [];
  router: Router;

  constructor(service: AmigoService, router: Router) {
    this.service = service;    
    this.router = router;

    this.amigos = this.service.buscarTodos();
  }  

  toggle(item: ItemAmigo) {

    if (this.lestOpen != null && this.lestOpen.hidden === false && this.lestOpen !== item) {
      this.lestOpen.hidden = true;
    }

    item.hidden = !item.hidden;
    this.lestOpen = item;
  }

  editar(item: ItemAmigo) {
    this.toggle(item);

    this.router.navigate(['/atualizar'], {queryParams: {id : item.amigo.id}});
  }

  excluir(item: ItemAmigo) {
    this.toggle(item);
    
    this.service.excluir(item.amigo);

    this.amigos.splice(this.amigos.indexOf(item), 1);    
  }

  cadastrar(){
    this.router.navigate(['/cadastro']);
  }
}
