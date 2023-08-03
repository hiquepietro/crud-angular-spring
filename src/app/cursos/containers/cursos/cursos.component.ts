import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';

import { CursosService } from '../../services/cursos.service';
import { Curso } from '../../model/curso';
import { ConfirmacaoDialogComponent } from 'src/app/shared/components/confirmacao-dialog/confirmacao-dialog.component';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos$: Observable<Curso[]> | null = null;

  constructor(
    private cursosService: CursosService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.refresh();
  }

  refresh() {
    this.cursos$ = this.cursosService.list()
      .pipe(
        catchError(error => {
          this.onError('Erro ao carregar cursos.');
          return of([])
        })
      );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void { }

  onAdd() {
    this.router.navigate(['novo'], { relativeTo: this.route });
  }

  onEdit(curso: Curso) {
    this.router.navigate(['edit', curso._id], { relativeTo: this.route });
  }

  onRemove(curso: Curso) {
    const dialogRef = this.dialog.open(ConfirmacaoDialogComponent, {
      data: 'Tem certeza que deseja remover esse curso?'
    });
    dialogRef.afterClosed().subscribe( (result: boolean) => {
      if (result) {
        this.cursosService.remove(curso._id).subscribe(
          () => {this.refresh();
          this.snackBar.open('Curso removido com sucesso.', 'X', {
            duration: 5000,
            verticalPosition: 'top',
            horizontalPosition:'center'

          });
          },
          () => this.onError('Erro ao remover curso.')
          );
      }
    }
    )
  }

}
