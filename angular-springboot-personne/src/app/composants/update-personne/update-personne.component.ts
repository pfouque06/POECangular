import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from '../../classes/personne';
import { PersonneService } from '../../services/personne.service';
import { PersonneListComponent } from '../../composants/personne-list/personne-list.component';

@Component({
  selector: 'app-update-personne',
  templateUrl: './update-personne.component.html',
  styleUrls: ['./update-personne.component.css']
})
export class UpdatePersonneComponent implements OnInit {

  submitted: boolean;
  num: number;
  personne: Personne;

  constructor(
    private route: ActivatedRoute,private router: Router,
    private personneService: PersonneService) { }

  ngOnInit() {
    this.submitted = false;
    this.personne = new Personne();
    this.num = this.route.snapshot.params['num'];
    this.personneService.getPersonne(this.num).subscribe(data => {
      console.log(data)
      this.personne = data;
    }, error => console.log(error));
  }

  updatePersonne() {
    this.personneService.updatePersonne(this.num, this.personne).subscribe(data => console.log(data), error => console.log(error));
    this.personne = new Personne();
    this.gotoList();
  }

  onSubmit() {
    this.updatePersonne();
  }

  gotoList() {
    this.router.navigate(['/personnes']);
  }

}
