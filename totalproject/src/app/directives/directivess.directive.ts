import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDirectivess]'
})
export class DirectivessDirective {

  constructor(public elm:ElementRef) { 

    this.elm.nativeElement.innerHtml="archana ammu phara";
    this.elm.nativeElement.style.color="red"


  }
  @HostListener('click') onclick(){
    this.elm.nativeElement.innerHtml="GD GIRL";
  }

}
