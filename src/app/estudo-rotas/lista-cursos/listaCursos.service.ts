import { Injectable } from '@angular/core';

@Injectable()
export class ListaCursosService {

  constructor() { }

  getCursos() {
    return [
      { id: 1, nome: 'Angular' },
      { id: 2, nome: 'React' }
    ]
  }

  getCurso(id: number) {

    let cursos = this.getCursos();

    for(let i=0; i<cursos.length; i++) {
      
      let curso = cursos[i];
      if(curso.id == id) {
        console.log('igual');
        return curso
      }
    }
    return null;

    

    // cursos.filter(curso => { 
    //     if ( curso.id === id) {
    //       console.log(curso)
    //       return curso
    //   } 
    // });
  }

}
