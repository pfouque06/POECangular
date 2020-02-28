import { UserService } from '../services/user.service';
import { Personne } from "../personne";
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-personne',
  templateUrl: './create-personne.component.html',
  styleUrls: ['./create-personne.component.css']
})
export class CreatePersonneComponent implements OnInit {

  personne: Personne = new Personne();
  submitted = false;

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit() {
  }
  newPersonne(): void {
    this.submitted = false;
    this.personne = new Personne();
  }

  save() {
    this.userService.createPersonne(this.personne)
      .subscribe(data => console.log(data), error => console.log(error));
    this.personne = new Personne();
    this.gotoList();


  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/user']);
  }
}


