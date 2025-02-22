import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent {
//recevoir un name, je vais recevoir ca du composant qui va l'appeler
@Input() name: any ="name"
@Output() newValue= new EventEmitter<any>()
value:string=""
//Lorsequ'on va detecter qu'on a relacher la touche sur notre element ya un evenement qui sera appelé
handleSubmit(event:any){
  //Lorseque on appuie sur submit on sauvgarde toutes action et toutes saisie
  event.preventDefault
  //si la value cad il existe une chaine de caractère
  if(this.value){
    //je vais chercher la valeur sur le champs
    const data: any= {name:this.name, value:this.value}
    this.newValue.emit(data)

  }else{
    this.newValue.emit(null)
  }
  //Récupérer la valeur qui est saisis dans le champ
  //const{name,value}=event.target
  //console.log(this.value)

}
}
