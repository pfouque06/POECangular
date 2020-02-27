import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetCharPipe } from './pipes/get-char.pipe';
import { GetCharAtPipe } from './pipes/get-char-at.pipe';
import { ObjToArrayPipe } from './pipes/obj-to-array.pipe';
import { AboutComponent } from './composants/about/about.component';
import { HomeComponent } from './composants/home/home.component';
import { ContactComponent } from './composants/contact/contact.component';
import { FormulaireComponent } from './composants/formulaire/formulaire.component';
import { Formulaire02Component } from './composants/formulaire02/formulaire02.component';
import { PersonneComponent } from './composants/personne/personne.component';

@NgModule({
  declarations: [
    AppComponent,
    GetCharPipe,
    GetCharAtPipe,
    ObjToArrayPipe,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    FormulaireComponent,
    Formulaire02Component,
    PersonneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
