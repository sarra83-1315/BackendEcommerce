import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EntityService {

  constructor(private http: HttpClient) { }
  //cette méthode va recevoir le nom de l'entite ,"entityName" c'est le nom de l'entité si on veut récupérer
  //le nom de l'entite product ou l'entite contact
  getDatas(entityName: string){
    //récupérer les données de product ou contact ou etc.....
    return this.http.get(environment.apiUrl+entityName)
    //et tt ca va retourner un observable qu'on va observer et réagir en fct de valeur qu'on va recevoir

  }
  getDatasByPage(entityName: string, pageNumber:Number=1, pageLimit:Number=5){
    //récupérer les données de product ou contact ou etc.....

    const route = environment.apiUrl+'/'+entityName+"/by/page?pageNumber="+pageNumber+"&pageLimit="+pageLimit


    console.log('route : ', route)

      return this.http.get(route)
      //et tt ca va retourner un observable qu'on va observer et réagir en fct de valeur qu'on va recevoir



  }
  searchDatasByPage(entityName: string, query:string, pageNumber:Number=1, pageLimit:Number=5){
    //récupérer les données de product ou contact ou etc.....
    //query c'est la recherche suivant le champ spécifier sur lequel on filtre
    return this.http.get(environment.apiUrl+entityName+"/search?"+query+"&pageNumber="+pageNumber+"&pageLimit="+pageLimit)
    //et tt ca va retourner un observable qu'on va observer et réagir en fct de valeur qu'on va recevoir

  }


}
