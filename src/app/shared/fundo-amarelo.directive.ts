import { Directive, ElementRef, Renderer2, HostListener, HostBinding, Host, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appFundoAmarelo]'
})
export class FundoAmareloDirective implements OnInit{

  backgroundColor: string;

  @Input() defaultColor = 'grey';

  @Input() highlightColor = 'blue';

  // caso nao precise de nenhuma manipulacao extra
  // @HostBinding('style.backgroundColor') backgroundColor: string;

  // caso haja mais manipulacoes em cima desse elemento
  @HostBinding('style.backgroundColor') get setColor() {
    // codigo aqui
    return this.backgroundColor;
  }

  @HostListener('mouseover') onMouseOver() {
    // this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', '#00ABE8');
    // this._renderer.setStyle(this._elementRef.nativeElement.querySelector('.btn-primary'), 'background-color', '#750CE8');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onmouseleave() {
    this.backgroundColor = this.defaultColor;
  }

  constructor( private _elementRef: ElementRef, private _renderer: Renderer2) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

}
