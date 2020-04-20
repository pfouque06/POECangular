import { Injectable } from '@angular/core';
import { Personne } from '../classes/personne';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  personnes:Array<Personne> = new Array<Personne>();

  constructor() {
    // this.personnes.push({ num: 10, nom: 'wick', prenom: 'john' });
    this.personnes.push(new Personne('wick', 'john'));
    this.personnes.push(new Personne("green", "bob"));
  }

  getAll(){
    return this.personnes;
  }

  addPerson(p: Personne){
    this.personnes.push(p);
  }

}
