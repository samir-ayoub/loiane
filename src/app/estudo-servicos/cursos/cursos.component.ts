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
  }

}
