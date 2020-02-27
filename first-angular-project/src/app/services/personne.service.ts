import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  personnes:Array<Personne> = new Array<Personne>();

  constructor() {
    this.personnes.push({ nom: 'wick', prenom: 'john' });
    this.personnes.push({ nom: 'green', prenom: 'bob' });
  }

  getAll(){
    return this.personnes;
  }

  addPerson(p: Personne){
    this.personnes.push(p);
  }

}
