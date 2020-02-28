import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  private userUrl = 'http://localhost:8080/api/v1/personnes';

 
  constructor(private http: HttpClient) { }
 
  getPersonne(num: number): Observable<any> {
    return this.http.get(`${this.userUrl}/${num}`);
  }

  createPersonne(personne: Object): Observable<Object> {
    return this.http.post(`${this.userUrl}`, personne);
  }

  updatePersonne(num: number, value: any): Observable<Object> {
    return this.http.put(`${this.userUrl}/${num}`, value);
  }

  deletePersonne(num: number): Observable<any> {
    return this.http.delete(`${this.userUrl}/${num}`);
  }

  getPersonnesList(): Observable<any> {
    return this.http.get(`${this.userUrl}`);
}
}
