import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Componentes/home/home.component';
import { UpdateComponent } from './Componentes/update/update.component';
import { InsertComponent } from './Componentes/insert/insert.component';


@NgModule({
  declarations: [
    AppComponent,
    UpdateComponent,
    InsertComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
