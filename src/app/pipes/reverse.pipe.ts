import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
 
  // transform(ch:string): any {
  //   let result:string="";
  //   for(let i=0; i<ch.length;i++){
  //     result=ch[i]+result;
  //   }
  //   return result;
  // }


  transform(ch:string): any {
    let result:string="";
    for(let i=ch.length-1; i>=0;i--){
      result=result+ch[i];
    }
    return result;
  }

}
