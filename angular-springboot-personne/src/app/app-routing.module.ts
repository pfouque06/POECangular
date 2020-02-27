import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePersonneComponent } from './composants/create-personne/create-personne.component';
import { PersonneDetailsComponent } from './composants/personne-details/personne-details.component';
import { PersonneListComponent } from './composants/personne-list/personne-list.component';
import { UpdatePersonneComponent } from './composants/update-personne/update-personne.component';

const routes: Routes = [
  { path: '', redirectTo: 'personnes', pathMatch: 'full' },
  { path: 'personnes', component: PersonneListComponent },
  { path: 'add', component: CreatePersonneComponent },
  { path: 'update/:num', component: UpdatePersonneComponent },
  { path: 'details/:num', component: PersonneDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
