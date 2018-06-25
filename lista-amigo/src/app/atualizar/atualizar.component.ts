import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AmigoService } from '../services/amigo.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
    selector: 'app-atualiza',
    styleUrls: ['./atualizar.component.css'],
    templateUrl: './atualizar.component.html',
    providers: [AmigoService]
})
export class AtualizarComponent {
    form: FormGroup;

    constructor(
        private activatedRoute: ActivatedRoute,
        private service: AmigoService,
        private fb: FormBuilder,
        private router: Router
    ) {

        this.form = this.fb.group({
            id: new FormControl({ value: '', disabled: true }),
            nome: new FormControl({ value: '' })
        });

        this.activatedRoute.queryParams.subscribe(params => {
            const id: number = params['id'];

            if (id) {
                this.service.buscarAmigo(id).subscribe((amigo) => {
                    this.form.patchValue(amigo);
                });
            }
        });
    }

    salvar() {
        this.service.atualizar(this.form.getRawValue()).subscribe(() => {
            this.router.navigateByUrl('listagem');
        });
    }
}
