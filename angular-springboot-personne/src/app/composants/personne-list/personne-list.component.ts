import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { Personne } from '../../classes/personne';
import { PersonneService } from '../../services/personne.service';
import { PersonneDetailsComponent } from '../personne-details/personne-details.component';

@Component({
  selector: 'app-personne-list',
  templateUrl: './personne-list.component.html',
  styleUrls: ['./personne-list.component.css']
})
export class PersonneListComponent implements OnInit {

  personnes: Observable<Personne[]>;

  constructor(
    private personneService: PersonneService,
    private router: Router
  ) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.personnes = this.personneService.getPersonnesList();
  }

  deletePersonne(num: number) {
    this.personneService.deletePersonne(num)
    .subscribe(data => {
      console.log(data);
      this.reloadData();
    },
    error => console.log(error));
  }

  personneDetails(num: number){
    this.router.navigate(['details', num]);
  }

  updatePersonne(num: number){
    this.router.navigate(['update', num]);
  }

}
