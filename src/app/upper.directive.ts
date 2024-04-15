import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appUpper]'
})
export class UpperDirective  {
  @Input() format:any ;
  constructor(private ref : ElementRef) {

  }
  @HostListener('blur') onur(){
    let v:string = this.ref.nativeElement.value;
    if(this.format =="up"){
      this.ref.nativeElement.value = v.toUpperCase();
    }
    else{
      this.ref.nativeElement.value = v.toLowerCase();
    }
  }
}
