import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './composants/about/about.component';
import { HomeComponent } from './composants/home/home.component';
import { ContactComponent } from './composants/contact/contact.component';
import { FormulaireComponent } from './composants/formulaire/formulaire.component';
import { Formulaire02Component } from './composants/formulaire02/formulaire02.component';
import { PersonneComponent } from './composants/personne/personne.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'formulaire', component: FormulaireComponent },
  { path: 'personneForm', component: Formulaire02Component },
  { path: 'personnePage', component: PersonneComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
