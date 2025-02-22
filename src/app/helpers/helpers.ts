import {Product} from 'src/app/models/product'
import {Category} from 'src/app/models/category'
import {User} from 'src/app/models/user'
import {Order} from 'src/app/models/order'
import {Contact} from 'src/app/models/contact'


// On va récupérer les nom des champs(les propriétée d'une enité),Array<string> est le type de retour
export const getEntityPorperties =(entity:string):Array<string>=>{
  //On va stocker les champs que nous avons dans l'entite qui nous a été fournit
  let results: any= []
  let entityClass:any;
  if(entity= "product"){
    //On pourra créer ici un objet products
    entityClass= new Product()
  }
  if(entity= "category"){
    entityClass= new Category()
  }
  if(entity= "user"){
    entityClass= new User()
  }
  if(entity= "order"){
    entityClass= new Order()
  }
  if(entity= "contact"){
    entityClass= new Contact()
  }
  //Si on arrive à rentrer dans les if cune fois cad que entityClass exixte et on pourra récupérer les champs sinon on retourne un result null
  //cad let results: any= [] retourne un tableau vide
  if(entityClass){
    //Object.key pour récupérer les propriéte et les champs de l'entité parexemple les champs de l'entité product
    results= Object.keys(entityClass)
  }
  return results

}
