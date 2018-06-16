import { Component, OnInit } from '@angular/core';
import { ListaCursosService } from './listaCursos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.scss']
})
export class ListaCursosComponent implements OnInit {

  listaCursos: Array<any>;
  pagina: number;
  inscricao: Subscription;

  constructor(
    private listaCursosService: ListaCursosService, 
    private activatedRoute: ActivatedRoute,
    private router: Router 
  ) { }

  ngOnInit() {
    this.listaCursos = this.listaCursosService.getCursos();
    this.inscricao = this.activatedRoute.queryParams.subscribe((queryParams: any) => {
      this.pagina = queryParams['pagina'];
    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  proximaPagina() {
    this.router.navigate(['/cursos'], {queryParams: {'pagina': ++this.pagina}});
  }
}
