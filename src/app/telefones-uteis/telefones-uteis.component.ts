import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-telefones-uteis',
  templateUrl: './telefones-uteis.component.html',
  styleUrls: ['./telefones-uteis.component.scss']
})
export class TelefonesUteisComponent implements OnInit {

  @Input('telefoneZe') telefoneZe: number;

  @Input('cuurso') courseName: string;

  @Output() mudouNumero = new EventEmitter();

  pegaValor = '22';



  constructor() { }

  ngOnInit() {
  }

  atualizaNumero() {
    this.telefoneZe ++;
    // console.log(this.valorEstudoViewChild);
    this.mudouNumero.emit({numeroNovo: this.telefoneZe});
  }

}
