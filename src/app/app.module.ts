import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AsideComponent } from './components/aside/aside.component';
import { ContainerComponent } from './components/container/container.component';
import { Error404Component } from './components/error404/error404.component';
import { EntityComponent } from './components/forms/entity/entity.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ModalComponent } from './components/modal/modal.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { FormatNamePipe } from './pipes/format-name.pipe';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { FormsModule } from '@angular/forms';
import { FormatTagPipe } from './pipes/format-tag.pipe';
import { AppRoutingModule } from './app.routing.module';
import { FormatValuePipe } from './pipes/format-value.pipe';
import { ImagePreviewComponent } from './components/image-preview/image-preview.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    ContainerComponent,
    Error404Component,
    EntityComponent,
    LoadingComponent,
    ModalComponent,
    PaginationComponent,
    FormatNamePipe,
    SearchFormComponent,
    FormatTagPipe,
    FormatValuePipe,
    ImagePreviewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// faire les requetes a partir de services et ces servises
// pourront etre disponible pour tt les composants cad qu'on pourra injecter ces services dans n'importe quel composants
//et uliser le code sans devoir a l'ecrire a chaque fois
