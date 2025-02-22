import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getEntityPorperties } from 'src/app/helpers/helpers';
import { routes } from 'src/app/helpers/routes';
import {EntityService} from 'src/app/services/entity.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  pagePath: string=""
  pageName: string=""
  pageNumber:number=1
  pageLimit:number=5
  datas:any;
  result:any;
  //les entités qu'on souhaite afficher
  entityNames:Array<string> =[];
  //tous les entité a afficher
  entityNamesAll:Array<string> =[];
  isLoading: Boolean= true;
  routes :Array<any> = routes
  query:string= ""
  searchTag: string=""
  displaySelectionBox= Boolean= false;
 constructor(private route:ActivatedRoute, private entityService: EntityService){

 }

 ngOnInit(){
  //La on va analyser la route
  //this.pagePath= this.route.snapshot.url[0]?.path || "product"
  //console.log({path: this.route.snapshot.url[0]?.path});
 // console.log({snapshot: this.route.snapshot.url[0]?.path});

 //On va afficher les champs de chaque entité
   //this.entityNamesAll= getEntityPorperties(this.pagePath)
   //Un tableau de chaine de caractères
  // this.entityNames= [this.entityNamesAll[0]]
  // console.log({entityNames});
  //C'est un observable
  this.initComp()
  this.getDatasByPage()
  //this.entityService.getDatasByPage(this.pagePath, this.pageNumber, this.pageLimit).subscribe({
    //data c'est des données qu'on va récupérer du serveur
     //next:(data:any)=>{
      //const {isSuccess, results}= data
      //if(isSuccess&results){
     // this.isLoading= false
      //this.datas= results
      //les données brut sans les champs
      //this.result= data
     // console.log(data);
      //}else{
        //gestion des erreurs
     // }

  // },
   //error: (error:any)=>{
    //gestion des erreurs
    //console.log(error);
   //}

 // })

}
getValue(data: any, name:string){
  //en principe il retourne data[name]
  const index: any= name
  return data[index]

}

initComp(){
  //A chaque fois je récupère le path je fouille dans la route pour récupérer le name
  this.pagePath= this.route.snapshot.url[0]?.path || "product"
  //Ca nous récupère un tableau d'éléments
  const routeObject: any= this.routes.filter(route=> route.path === "/"+this.pagePath)
  if(routeObject[0]){
    this.pageName= routeObject[0]?.name
  }
  //On va afficher les champs de chaque entité
  this.entityNamesAll= getEntityPorperties(this.pagePath)
  //Un tableau de chaine de caractères
  this.entityNames= [this.entityNamesAll[0]]
 // console.log({entityNames});

}
//Pour changer et basculer entre les pages dont il ont 5 éléments pour chaque pages
setPage(page: number){
  //La page qu'on souhaite consulter
  //console.log({setPage: page});
  //Puisque pageNumber à été modifié, c'est la page qu'on souhaite avoir
  this.pageNumber= page
  this.getDatasByPage()

}
//on utlilise la méthode lorseque on veut changer de page limit dans le select
setPageLimit(event:any){
  //c'est avec Target qu'on arrive a cibler l'element de la page sur lequel on va détécter le changement
  //et on pourra récupérer son name et value...
  const{name, value}= event.target
   //console.log{{name, value}};

  const pageLimit= parseInt(value)
  //ParseInt transforme une chaine caractère ou un nombre en entier
  //Si ce n'est pas NAN cad que c'est un number
  if(!isNaN(pageLimit)){
    this.pageLimit= parseInt(value)
    this.getDatasByPage()
  }


}
searchData(data:any){
  this.query=""
  if(data){
     //searchTag est le mot de clé de recherche"den"
    this.searchTag= data.value
    this.query+= data.name+ "="+ data.value
    //Sur console on aura query: 'name= cvfdgg'
  }else
  //console.log({query});
  this.getDatasByPage()
}

//Récupérer et faire l'affichage de données
getDatasByPage(){
  //si le champ existe
  if(this.query){
    this.entityService.searchDatasByPage(this.pagePath,this.query, this.pageNumber, this.pageLimit).subscribe({
      //data c'est des données qu'on va récupérer du serveur
       next:(data:any)=>{
        const {isSuccess, results}= data
        if(isSuccess&results){
        this.isLoading= false
        this.datas= results
        //les données brut sans les champs
        this.result= data
        console.log(data);
        }else{
          //gestion des erreurs
        }

     },
     error: (error:any)=>{
      //gestion des erreurs
      console.log(error);
     }

    })
  }else{
     this.entityService.getDatasByPage(this.pagePath, this.pageNumber, this.pageLimit).subscribe({
    //data c'est des données qu'on va récupérer du serveur
     next:(data:any)=>{
      const {isSuccess, results}= data
      if(isSuccess&results){
      this.isLoading= false
      this.datas= results
      //les données brut sans les champs
      this.result= data
      console.log(data);
      }else{
        //gestion des erreurs
      }

   },
   error: (error:any)=>{
    //gestion des erreurs
    console.log(error);
   }

  })
  }

}
setDisplaySelectionBox(){
  this.displaySelectionBox= !this.displaySelectionBox
}


setEntityNames(event:any, name:string){
  //checked va nous renseigner si le champ est coché ou pas
 const {checked}= event.target
if(checked){
  //c'est dans entityNames qu'on souhaite maitre les champs a afficher
 if (!this.entityNames.includes(name)){
    this.entityNames.push(name)
 }
//cad qu'on a décocher le champ name et le champ name doit disparaitre avec tt les données
}else{
 this.entityNames= this.entityNames.filter((entityName:string)=>entityName!==name )
}
console.log{{checked, name}}
}
}

//ActivatedRoute dans Angular : fournit l'accès aux informations sur une route associée à un composant chargé dans un outlet .
// Étape 1 Importez l'interface ActivatedRoute. import { Router, ActivatedRoute } from '@angular/router';
// Étape 2 Injectez l'ActivatedRoute dans le constructeur.
