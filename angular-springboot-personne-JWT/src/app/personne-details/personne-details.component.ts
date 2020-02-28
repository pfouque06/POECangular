import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Personne } from "../personne";
import { ActivatedRoute, Router } from '@angular/router';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-personne-details',
  templateUrl: './personne-details.component.html',
  styleUrls: ['./personne-details.component.css']
})
export class PersonneDetailsComponent implements OnInit {

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
  
    list(){
      this.router.navigate(['user']);
    }

}
