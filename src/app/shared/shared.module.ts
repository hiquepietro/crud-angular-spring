import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { CategoriaPipe } from './pipes/categoria.pipe';
import { ConfirmacaoDialogComponent } from './components/confirmacao-dialog/confirmacao-dialog.component';



@NgModule({
  declarations: [

    ErrorDialogComponent,
    CategoriaPipe,
    ConfirmacaoDialogComponent

  ],
  imports: [
    CommonModule,
    AppMaterialModule,
  ],
  exports: [
    ErrorDialogComponent,
    ConfirmacaoDialogComponent,
    CategoriaPipe
  ]
})
export class SharedModule { }
