import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from '../../classes/personne';
import { PersonneService } from '../../services/personne.service';
import { PersonneListComponent } from '../../composants/personne-list/personne-list.component';

@Component({
  selector: 'app-personne-details',
  templateUrl: './personne-details.component.html',
  styleUrls: ['./personne-details.component.css']
})
export class PersonneDetailsComponent implements OnInit {

  num: number;
  personne: Personne;

  constructor (
    private route: ActivatedRoute,private router: Router,
    private personneService: PersonneService
  ) { }

  ngOnInit() {
    this.personne = new Personne();
    this.num = this.route.snapshot.params['num'];
    this.personneService.getPersonne(this.num).subscribe(data => {
      console.log(data)
      this.personne = data;
    }, error => console.log(error));
  }

  list(){
    this.router.navigate(['personnes']);
  }

}
