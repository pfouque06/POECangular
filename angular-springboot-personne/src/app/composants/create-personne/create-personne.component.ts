import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personne } from '../../classes/personne';
import { PersonneService } from '../../services/personne.service';

@Component({
  selector: 'app-create-personne',
  templateUrl: './create-personne.component.html',
  styleUrls: ['./create-personne.component.css']
})
export class CreatePersonneComponent implements OnInit {

  personne: Personne = new Personne();
  submitted = false;
  
  constructor(
    private personneService: PersonneService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  newPersonne(): void {
    this.submitted = false;
    this.personne = new Personne();
  }

  save() {
    this.personneService.createPersonne(this.personne).subscribe(data => console.log(data), error => console.log(error));
    this.personne = new Personne();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/personnes']);
  }

}
