import { Component } from '@angular/core';
import { AmigoService } from '../services/amigo.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-cadastro',
    styleUrls: ['./cadastro.component.css'],
    templateUrl: './cadastro.component.html',
    providers: [AmigoService]
})
export class CadastroComponent {

    form: FormGroup;

    constructor(
        private service: AmigoService,
        private fb: FormBuilder,
        private router: Router
    ) {
        this.form = this.fb.group({
            id: new FormControl(),
            nome: new FormControl()
        });
    }

    salvar() {
        this.service.salvar(this.form.getRawValue()).subscribe(() => {
            this.router.navigateByUrl('/');
        });
    }
}

