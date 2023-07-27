import { Location } from '@angular/common';

import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder} from '@angular/forms';
import { CursosService } from '../services/cursos.service';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.scss']
})
export class CursoFormComponent implements OnInit {

  form = this.formBuilder.group({
    nome: [''],
    categoria: ['']
  });


  constructor(private formBuilder: NonNullableFormBuilder,
    private service: CursosService,
    private snacBar: MatSnackBar,
    private Location: Location) {

  }

  ngOnInit(): void {

  }

  onSubmit() {
    this.service.save(this.form.value)
    .subscribe(result => this.onSuccess(), error => this.onError());
  }

  onCancel() {
    this.Location.back();
  }

  private onSuccess(){
    this.snacBar.open('Curso salvo com sucesso.', '', { duration: 5000 });
    this.onCancel();
  }

  private onError(){
    this.snacBar.open('Erro ao salvar curso.', '', { duration: 5000 });
  }
}
