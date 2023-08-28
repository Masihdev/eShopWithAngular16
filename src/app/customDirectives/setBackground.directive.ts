import { Directive, ElementRef, OnInit, Renderer2, Input } from "@angular/core";

@Directive({
    selector: '[setBackground]'
})
export class SetBackground implements OnInit {
    // private element: ElementRef;
    @Input() backColor: string = '#36454f';
    @Input() textColor: string = 'white';

    constructor(private element: ElementRef, private renderer: Renderer2) {
        // this.element = element;
    }


    ngOnInit(): void {
        // this.element.nativeElement.style.backgroundColor = '#36454f';
        // this.element.nativeElement.style.color = 'white';
        this.renderer.setStyle(this.element.nativeElement, 'background', this.backColor);
        this.renderer.setStyle(this.element.nativeElement, 'color', this.textColor);
        this.renderer.setAttribute(this.element.nativeElement, 'title', 'This is an example.')
    }
}