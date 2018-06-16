import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ListaCursosService } from '../lista-cursos/listaCursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.scss']
})
export class CursoDetalheComponent implements OnInit, OnDestroy {

  curso: any;
  id: number;
  inscricao: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private listaCursoService: ListaCursosService,
    private router: Router
  ) {
    // this.id = activatedRoute.snapshot.params['id'];
   }

  ngOnInit() {
    this.inscricao = this.activatedRoute.params.subscribe((params: any) => {
      this.id = params['id'];
      this.curso = this.listaCursoService.getCurso(this.id);

      if (this.curso === null) {
        this.router.navigate(['/curso-nao-encontrado'])
      }
    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
