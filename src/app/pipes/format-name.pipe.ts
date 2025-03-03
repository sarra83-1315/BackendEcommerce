import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatName'
})
export class FormatNamePipe implements PipeTransform {
  //n va recevoir un string  et retourner un string

  transform(value: string): string {
    if(value === "imageUrls"){
      return "Image"
    }
    if(value === "isBestSeller"){
      return "Best Seller"
    }
    if(value === "isNewArrival"){
      return "New Arrival"
    }
    if(value === "isFeatured"){
      return "Featured"
    }
    if(value === "isSpecialOffer"){
      return "Special Offer"
    }
    //  la valeur qui en parametre il nous l'on donné test_merci split est pour découpé
     let newValueArray:any= value.split("_")
     //map est pour parcourir le tableau
     //["test", "merci"]
    newValueArray = newValueArray.map((name:string)=>name.charAt(0).toUpperCase()+name.slice(1))
    //["Test", "Merci"] mettre la 1ère lettre en majuscule
    let newValue= newValueArray.join(" ")
    //Test Merci joindre et mettre un espace
    return newValue;
  }

}



// Pour créer un pipe "npx ng g pipe pipes/formatName"
