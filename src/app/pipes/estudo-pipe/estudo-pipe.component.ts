import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudo-pipe',
  templateUrl: './estudo-pipe.component.html',
  styleUrls: ['./estudo-pipe.component.scss']
})
export class EstudoPipeComponent implements OnInit {

  item: any = {
    titulo: 'A Sutil Arte de Ligar o F*da-Se',
    paginas: 575,
    avaliacao: 4.5643,
    preco: 44.99,
    lancamento: new Date(2016, 5, 23),
    url: 'uol.com.br'
  };

  constructor() { }

  ngOnInit() {
  }

}
