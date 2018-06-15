import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'app-estudo-pipe',
  templateUrl: './estudo-pipe.component.html',
  styleUrls: ['./estudo-pipe.component.scss']
})
export class EstudoPipeComponent implements OnInit {

  myForm;
  filtro: string;

  item: any = {
    titulo: 'A Sutil Arte de Ligar o F*da-Se',
    paginas: 575,
    avaliacao: 4.5643,
    preco: 44.99,
    lancamento: new Date(2016, 5, 23),
    url: 'uol.com.br'
  };

  livros: Array<string> = ['Java', 'Angular 2'];

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Valor Assíncrono com promise');
    }, 2000);
  });

  // valorAsync com observable
  valorAsync2 = Observable.interval(2000)
    .map(valor => 'Valor assíncrono com observable');

  constructor() { }

  ngOnInit() {
  }

  addLivro(livro: string) {
    this.livros.push(livro);
  }

  obterCurso() {
    if (this.livros.length === 0 || this.filtro === undefined || this.filtro.trim() === '') {
      return this.livros;
    }
    return this.livros.filter(valor => {
      if (valor.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0 ) {
        return true;
      } else {
        return false;
      }
    });
  }

}
