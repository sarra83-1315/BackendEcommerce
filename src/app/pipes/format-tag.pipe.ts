import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatTag'
})
export class FormatTagPipe implements PipeTransform {

  transform(value: any, tag: string): unknown {
    let newValue= value
    if(tag){
      //si tag est définit cad qu'on a un mot clé qui est définit et on va le rechercher dans value
      //On va découpé ca a l'emplacement ou on a le tag avec split
      //le faite de découper on aura un tableau de 03 inf au min cad la partie avnt le tag et aprés le tag
      let newTag:any = tag
      let valueArray= value.split(new RegExp(newTag, 'i'))

      newValue= valueArray.join("<span class='tag'>"+newTag+"</span>")
    }
    return newValue;
  }

}
