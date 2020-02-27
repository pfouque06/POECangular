import { Component, OnInit } from '@angular/core';
import { PersonneService } from '../../services/personne.service';
import { Personne } from '../../interfaces/personne';

@Component({
  selector: 'app-formulaire02',
  templateUrl: './formulaire02.component.html',
  styleUrls: ['./formulaire02.component.css']
})
export class Formulaire02Component implements OnInit {

  personne: Personne = { };
  constructor(private personneService: PersonneService) { }

  ngOnInit(): void {
  }

  add() {
    /* if (!this.personneIsEmpty()) */
      this.personneService.addPerson(this.personne);
  }

/*   isEmpty(str:string) {
    return str.isEmpty();
  }

  personneIsEmpty() {
     return isEmpty(this.personne.nom) || isEmpty(this.personne.prenom);
  } */

}
