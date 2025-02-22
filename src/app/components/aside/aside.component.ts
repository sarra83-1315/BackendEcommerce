import { Component } from '@angular/core';
import { routes } from 'src/app/helpers/routes';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent {
routes :Array<any> = routes
constructor(){

}
ngOnInit(){

}
}

//l'idéal est de se connecter à des données qu'on peut recevoir d'un backend et les utiliser directement
