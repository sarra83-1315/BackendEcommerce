import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent {
//recevoir un name, je vais recevoir ca du composant qui va l'appeler
@Input() name: any ="name"
//les inf saisie dans le filtre il faut qu'on l'envoi au parent
@Output() newValue= new EventEmitter<any>()
value:string=""
//Lorsequ'on va detecter qu'on a relacher la touche sur notre element ya un evenement qui sera appelé
handleKeyUp(event: any){
  //value est la valeur récupérer dans le champ
const{name, value}=event.target
}

handleSubmit(event:any){
  //Lorseque on appuie sur submit on sauvgarde toutes action et toutes saisie
  event.preventDefault()
 // const{name, value}=event.target
  //console.log(this.value)
  //si la value cad il existe une chaine de caractère
  if(this.value){
    //je vais chercher la valeur sur le champs donc la on aura un objet un name et sa valeur
    const data: any= ({name:this.name, value:this.value})
    //par ex si on clique sur contact on aura data => (name = subject et valeur =jean) ce qui taper dans le filre searchForm
    this.newValue.emit(data)

  }else{
    this.newValue.emit(null)
  }
  //Récupérer la valeur qui est saisis dans le champ
  //const{name,value}=event.target
  //console.log(this.value)

}
}
