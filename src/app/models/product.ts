import { Category } from 'src/app/models/category';
export class Product {
  name:string = ""
  more_description:string =""
  description:string =""
  stock: Number= 0
  solde_price: Number = 0
  regular_price: Number= 0
  categories: Array<Category>= []
  imageUrls:Array<string> = []
  brand: string= ""
  currency: string= "EUR"
  status: Boolean= false
  availability: Boolean= false
  // les valeurs de variation d'un produit ex chausssures de pointure 42 44 donc la l'option la est la taille
  options:Object= {}
  //cest des caractériqtique qu'on peut apres desactiver ou activer en fct de certains specificité
  isBestSeller: boolean = false
  isNewArrival: boolean = false
  isFeatured: boolean = false
  isSpecialOfer: boolean = false
  updated_at: Date|null = null
  created_at: Date|null = null

}

//status false cad que le produit n'est pas publier
