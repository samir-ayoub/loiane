import { Directive, HostBinding, HostListener, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appHighlights]'
})
export class HighlightsDirective implements OnInit{

  backgroundColor: string;

  @Input() defaultColor = 'white';
  @Input() highlightColor = 'blue';

  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  }

  @HostListener('mouseover') onMouseOver() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = this.defaultColor;
  }

  constructor() { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

}
