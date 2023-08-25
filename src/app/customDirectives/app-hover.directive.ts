import { Directive, ElementRef, Renderer2, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appAppHover]'
})
export class AppHoverDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostBinding('style.background') setBackground: string = '#28282B';
  @HostBinding('style.border') border: string = 'none';
  @HostBinding('style.color') color: string = 'white';

  @HostListener('mouseenter') onMouseEnter() {
    this.setBackground = 'white';
    this.color = '#28282B';
    this.border = '#28282B 3px solid';
  }

  @HostListener('mouseout') onMouseOut() {
    this.setBackground = '#28282B';
    this.color = 'white';
    this.border = 'none';
  }
  

}
