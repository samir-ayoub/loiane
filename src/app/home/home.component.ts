import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TelefonesUteisComponent } from '../telefones-uteis/telefones-uteis.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentValue: string;
  savedValue: string;
  savedValueOnBlur: string;
  mouseOverAnimate: boolean;
  inputName: string;
  contatosUteis = 'Contatos úteiis';
  telefone = 999888;
  mensagemAtualizou: number;

  @ViewChild('estudoViewChild') valorEstudoViewChild: TelefonesUteisComponent;

  constructor() { }

  ngOnInit() {
  }

ngAfterViewInit() {
  console.log(this.valorEstudoViewChild.pegaValor);
}

  onClickBtn() {
    console.log('entrando...');
  }

  onKeyUp(event: KeyboardEvent) {
    console.log((<HTMLInputElement>event.target).value);
    this.currentValue = (<HTMLInputElement>event.target).value;
  }

  saveValue(event) {
    this.savedValue = event;
  }

  saveValueOnBlur(event) {
    this.savedValueOnBlur = event;
  }

  onMouseOverOut() {
    this.mouseOverAnimate = !this.mouseOverAnimate;
  }

  onMudouNumero(evento) {
    console.log(evento.numeroNovo);
    this.mensagemAtualizou = evento.numeroNovo;
  }



}
