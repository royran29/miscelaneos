import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private el: ElementRef) {
    console.log('Directiva');
    // this.el.nativeElement.style.backgroundColor = 'red';
   }

   @Input('appResaltado') nuevoColor: string;

   @HostListener('mouseenter') mouseEntra() {
     this.resaltar(this.nuevoColor || 'red');
   }

   @HostListener('mouseleave') mouseSale() {
    this.resaltar(null);
  }

  private resaltar(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
