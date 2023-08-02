import { Location } from '@angular/common';

import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators} from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';
import { CursosService } from '../../services/cursos.service';
import { ActivatedRoute } from '@angular/router';
import { Curso } from '../../model/curso';



@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.scss']
})
export class CursoFormComponent implements OnInit {

  form = this.formBuilder.group({
    _id:[''],
    nome: ['',[Validators.required,
      Validators.minLength(5),
      Validators.maxLength(100)]],
    categoria: ['', [Validators.required]]
  });


  constructor(private formBuilder: NonNullableFormBuilder,
    private service: CursosService,
    private snacBar: MatSnackBar,
    private Location: Location,
    private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    const curso: Curso = this.route.snapshot.data['curso'];
    this.form.setValue({
      nome: curso.nome,
      categoria: curso.categoria,
      _id: curso._id
    });


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

  public getErrorMessage(fieldName: string) {
    const field = this.form.get(fieldName);

    if (field?.hasError('required')) {
      return 'Campo obrigatório';
    }

    if (field?.hasError('minlength')) {
      const requiredLength = field.errors ? field.errors['minlength']['requiredLength'] : 5;
      return 'Tamanho minimo precisa ser de ${requiredLength} caracteres';
    }

    if (field?.hasError('maxlength')) {
      const requiredLength = field.errors ? field.errors['maxlength']['requiredLength'] : 200;
      return 'Tamanho maximo excedido de ${requiredLength} caracteres';
    }

    return 'Campo Inválido';
  }
}
