import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { RegisterComponent } from './register/register.component';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

import { PersonneDetailsComponent } from './personne-details/personne-details.component';
import { CreatePersonneComponent } from './create-personne/create-personne.component';
import { UpdatePersonneComponent } from './update-personne/update-personne.component';


 
const routes: Routes = [


    {
        path: 'home',
        component: HomeComponent
    },
   
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'auth/login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: RegisterComponent
    },
    { 
        path: 'add', 
    
        component: CreatePersonneComponent 
    },
    { 
        path: 'update/:num', 
        component: UpdatePersonneComponent 
    },
    { 
        path: 'details/:num', 
        component: PersonneDetailsComponent 
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
 
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }