import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pi'
})
export class PiPipe implements PipeTransform {

  transform(v : any): unknown {
   let n : string ="";
    if(v.length > 10){
      n = "..."
    }
    return v.substring(0,10)+n;
  }

}
