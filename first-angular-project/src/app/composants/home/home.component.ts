import { Component, OnInit } from '@angular/core';
import { Personne } from '../../classes/personne';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'first-angular-project';
  
  personne: Personne = new Personne(100, "Wick", "John");

  tab: number[] = [2, 3, 5, 8];

  direBonjour() {
    return "bonjour Angular";
  }

  nom = 'wick';
  getColor() {
    return "white";
  };
  getBackgroundColor() {
    return "red";
  }

  maDate = Date.now();

  personne_array = [
    {
      num: 200,
      nom: 'pat',
      prenom: 'wick',
    },
    {
      num: 300,
      nom: 'pat',
      prenom: 'wick',
    },
    {
      num: 400,
      nom: 'pat',
      prenom: 'wick',
    },
  ]

}
