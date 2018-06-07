import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  cursos: string[] = ['Angular', 'Typescript', 'HTML5'];

  constructor() { }

  getCursos() {
    return this.cursos;
  }

  addCurso(curso: string) {
    this.cursos.push(curso);
  }

}
