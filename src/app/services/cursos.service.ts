import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class CursosService {
  
  // maneira estatica para acessar o emitter (estatica nao precisa chamar a instancia)
  static emitirStaticamenteCurso = new EventEmitter<string>();

  emitirCursoCriado = new EventEmitter<string>();



  cursos: string[] = ['Angular', 'Typescript', 'HTML5'];

  constructor() { }

  getCursos() {
    return this.cursos;
  }

  addCurso(curso: string) {
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    // modo estático
    CursosService.emitirStaticamenteCurso.emit(curso);
  }

}
