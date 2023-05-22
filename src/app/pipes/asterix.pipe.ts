import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asterix'
})
export class AsterixPipe implements PipeTransform {

  transform(ch:string){

    let v=["a","i","e","o","u","y"];
    let result="";
    let x="";
    for(let i=0; i<ch.length; i++){
        x=ch[i];

        for(let j=0; j<v.length; j++){
            if(ch[i].toLowerCase()==v[j]){
            x="*";
            break;               
            }
        
         }
        result=result+x;
    }
    return result;
  }

}
