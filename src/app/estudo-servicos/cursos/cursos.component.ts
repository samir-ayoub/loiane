import { Component, OnInit } from '@angular/core';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];

  constructor(private cursosService: CursosService) {
  }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();

    this.cursosService.emitirCursoCriado.subscribe(curso => console.log(curso));

    // modo estatico, nao precisa instanciar. usar em níve global assim

    CursosService.emitirStaticamenteCurso.subscribe(curso => console.log(`${curso} chamado no modo estático`));
  }

}
