import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Personne } from "../personne";
import { ActivatedRoute, Router } from '@angular/router';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-update-personne',
  templateUrl: './update-personne.component.html',
  styleUrls: ['./update-personne.component.css']
})
export class UpdatePersonneComponent implements OnInit {

  num: number;
  personne: Personne;

  constructor(private route: ActivatedRoute,private router: Router,
    private userService: UserService) { }

  ngOnInit() {
    this.personne = new Personne();

    this.num = this.route.snapshot.params['num'];
    
    this.userService.getPersonne(this.num)
      .subscribe(data => {
        console.log(data)
        this.personne = data;
      }, error => console.log(error));
      
  }
  updatePersonne() {
    this.userService.updatePersonne(this.num, this.personne)
      .subscribe(data => console.log(data), error => console.log(error));
    this.personne = new Personne();
    this.gotoList();
  }

  onSubmit() {
    this.updatePersonne();    
  }

  gotoList() {
    this.router.navigate(['/user']);
  }
}


