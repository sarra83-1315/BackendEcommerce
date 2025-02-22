import { Component,EventEmitter,Input, Output,OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnChanges{
  //On attend a recevoir des données dans le composant pagination
@Input() current:any=1
@Input() paginateLength:any=7
@Input() allCount:any=5
@Input() pageLimit:any=5
@Input() next:any|null=2
@Input() previous:any|null=null

items: Array<any|String>=[]
min:any=1
max:any=1
// Le fils pagination informe le papa container qu'il ya un click et qui veut la page 2 par exemple
//pageSelected est un evenement qu'on va emettre a chaque fois que l'utilisateur souhaite changer de page
@Output() pageSelected = new EventEmitter<number>();

constructor(){

}
//et lorseque le composant sera rénitialiser
ngOnInit(){
  this.initPagination()
  //console.log(this.items);
  console.log({
    current: this.current,
    allCount: this.allCount,
    pageLimit:this.pageLimit,
    next:this.next,
    previous: this.previous
  });
}


ngOnChanges(changes: SimpleChanges): void {
  this.initPagination()
}
//méthode qui va initialiser notre template pagination
initPagination(){
  //la valeur associer a notre minimum
 this.min=1
 //Math:un module de JavaScript
 // ceil:méthode retourne le plus petit entier sup ou egale au nombre qu'on lui donne ici en paramètre
 //max: le Nbr total de page
 //12.01 cad qu'on 12 pages et 1 page qui 'atteint pas les 5 pages limite ex 140 données/5pageLimit=28 page
 this.max= Math.ceil(this.allCount / this.pageLimit)

 if(this.paginateLength>this.max){
   this.items= []
    for (let index = this.min; index <=this.max; index++) {
      this.items.push(index)

    }


 }else{       // 1        2    3       4
  this.items= [this.min,"<<",">>", this.max]
  let index=0
 //le nbr d'information a afficher  dans le tableau la on a (7-4)=3 donc il reste 03valeurs
 let maxNewElement=this.paginateLength - this.items.length
 while(index<(maxNewElement)){
   let value:any;
   if((this.current> this.min)&&(this.current> this.max)){
    //la valeur inserré dans le tableau
    value= this.current+index-1
    //this.items.splice(2+index, 0, value)
   }
   if(this.current=== this.max){
     value= this.current+index- maxNewElement
    //this.items.splice(2+index, 0, value)
   }
   if(this.current=== this.min){
    value= this.current+index+1
   // this.items.splice(2+index, 0, value)
   }
   //splice c'est juste pour l'insertion des valeurs dans le tableau dans les trois cas
   this.items.splice(2+index, 0, value)
  index ++
 }
 }

}
//On click
handleSetPage(page: any){
  //console.log(page);
  let newPage: number= page
  if(page === "<<"){
    newPage= this.current-1
  }
  if(page === ">>"){
    newPage= this.current+1
  }
  if((newPage >= this.min)&&(newPage <= this.max)){
   this.pageSelected.emit(newPage)
  }
}
}

//allCount: le nombre total d'information qu'on a en base de donnée
//pageLimit: le nombre d'information qu'on affiche par page ca nous le nbr total de page
//12,01 cad qu'on a 12 pages mais la dernière qui n'atteint pas les 5 informations cad la limite des page qui
//à 5

//paginateLength: 7 /le nbr total d'informations a afficher dans le tableau
//                 par défaut on a 4 informations dedans cad que la différence sera 3

//splice est une méthode qui s'execute sur le tableau qui permet d'ajouter un élément et de supprimer un élément à une position
//donnée
//(2+index, 0, value)=>2+index au minimum on veut sauter ca ' this.min,"<<" '
//0 => le nbr d'élément qu'on veut remplacer , la on veut inseré un élément



