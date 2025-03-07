import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatValue'
})
export class FormatValuePipe implements PipeTransform {
//on va recevoir la valeur sur lequel on va utilisé le pipe
  transform(value: any, name: string[]): unknown {
    let newValue= value
    //if(name =="imageUrls"){
     //c'est un tableau qui les adresse vers les images
     //console.log(value);
    // const url= value[0]
    // newValue= '<img src= "${url}" width="50" heigth="50"/>'
    //}
    return newValue;
  }


}
