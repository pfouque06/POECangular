import { Component, OnInit } from "@angular/core";
import { Personne } from "src/app/classes/personne";
import { PersonneService } from "src/app/services/personne.service";

@Component({
  selector: "app-formulaire02",
  templateUrl: "./formulaire02.component.html",
  styleUrls: ["./formulaire02.component.css"],
})
export class Formulaire02Component implements OnInit {
  personne: Personne = new Personne();
  types: string[] = [
    "Really Smart",
    "Super Flexible",
    "Super Hot",
    "Weather Changer",
  ];
  type: string;
  submitted: boolean = false;



  constructor(private personneService: PersonneService) {}

  ngOnInit(): void {}

  // natural mehtod called on submit type button click action
  // onSubmit() { this.submitted = true; }

  add(): void {
    this.personneService.addPerson(this.personne);
    this.submitted = true;
  }

  reset(): void {
    // this.personne = new Personne();
    this.personne.nom = "";
    this.personne.prenom = "";
  }

  new(): void {
    this.personne = new Personne();
    this.type = "";
    this.submitted = false;
  }

  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.personne);
  }
}
