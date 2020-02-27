import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePersonneComponent } from './composants/create-personne/create-personne.component';
import { PersonneDetailsComponent } from './composants/personne-details/personne-details.component';
import { PersonneListComponent } from './composants/personne-list/personne-list.component';
import { UpdatePersonneComponent } from './composants/update-personne/update-personne.component';

import { PersonneService } from './services/personne.service';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CreatePersonneComponent,
    PersonneDetailsComponent,
    PersonneListComponent,
    UpdatePersonneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
