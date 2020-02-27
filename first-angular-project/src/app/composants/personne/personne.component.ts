import { Component, OnInit } from '@angular/core';
import { PersonneService } from '../../services/personne.service';
import { Personne } from '../../interfaces/personne';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit {

  personnes: Array <Personne> = new Array <Personne>();

  constructor(private personneService: PersonneService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.personnes = this.personneService.getAll();
  }

}
