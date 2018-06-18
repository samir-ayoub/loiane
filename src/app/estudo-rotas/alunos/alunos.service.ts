import { Injectable } from '@angular/core';

@Injectable()
export class AlunosService {

  private alunos: Array<any> = [
    {id: 1, nome: 'João', email: 'joao@aluno.com.br'},
    {id: 2, nome: 'Pedro', email: 'pedro@aluno.com.br'},
    {id: 3, nome: 'Tiago', email: 'tiago@aluno.com.br'},
    {id: 4, nome: 'Judas', email: 'judas@aluno.com.br'},

  ]

  constructor() { }

  getAlunos() {
    return this.alunos;
  }

  getAluno(id: number) {
    let alunos = this.getAlunos();

    for(let i=0; i<alunos.length; i++) {
      
      let aluno = alunos[i];
      if(aluno.id == id) {
        console.log('igual');
        return aluno
      }
    }
    return null;

  }

}
