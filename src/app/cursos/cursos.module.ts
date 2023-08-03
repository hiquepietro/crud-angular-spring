import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CursosRoutingModule } from './cursos-routing.module';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CursoListComponent } from './components/cursos-list/cursos-list.component';
import { CursoFormComponent } from './containers/curso-form/curso-form.component';
import { CursosComponent } from './containers/cursos/cursos.component';


@NgModule({
  declarations: [
    CursosComponent,
    CursoFormComponent,
    CursoListComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class CursosModule { }
