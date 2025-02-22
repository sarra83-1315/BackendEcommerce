export class Category {
 name:String = ""
description:string =""
//la category n'a pas de parent donc c'est ulln
parentCategory:Category| null = null
updated_at: Date|null = null
created_at: Date|null = null

}
