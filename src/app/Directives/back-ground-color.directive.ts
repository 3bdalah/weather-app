import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBackGroundColor]',
  standalone: true
})
export class BackGroundColorDirective implements OnInit {
   @Input ('appBackGroundColor') tempx:number =0; 
  constructor( private el : ElementRef) { }
  ngOnInit( ) :void{
    this.setBackgroundColor();
  }

  private setBackgroundColor() {
      if(this.tempx < 10){
       this.el.nativeElement.style.backgroundColor = "blue";
      }else if(this.tempx >=10&& this.tempx<25){
        this.el.nativeElement.style.backgroundColor = "green";
      
      }else{
        this.el.nativeElement.style.backgroundColor = "red";
      
      }
  }

}
