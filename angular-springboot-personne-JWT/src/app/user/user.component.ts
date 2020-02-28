import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Observable } from "rxjs";
import { Personne } from "../personne";
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  board: string;
  errorMessage: string;

  personnes: Observable<Personne[]>;
 
  constructor(private userService: UserService,private router: Router) { }
 
  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.personnes = this.userService.getPersonnesList();
  }
  
  deletePersonne(num: number) {
    this.userService.deletePersonne(num)
      .subscribe(
        data => {
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