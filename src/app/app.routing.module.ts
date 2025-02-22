import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ContainerComponent } from './components/container/container.component';
import { Error404Component } from './components/error404/error404.component';

const routes:Routes= [
{
  path: "",
  component: ContainerComponent
},
{
  path: "product",
  component: ContainerComponent
},
{
  path: "category",
  component: ContainerComponent
},
{
  path: "user",
  component: ContainerComponent
},
{
  path: "order",
  component: ContainerComponent
},
{
  path: "contact",
  component: ContainerComponent
},
{
  path: "**",
  component: Error404Component
}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
