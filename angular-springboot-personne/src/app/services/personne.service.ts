import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personne } from '../classes/personne';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  private baseUrl = 'http://localhost:9090/api/v1/personnes';

  constructor(private http: HttpClient) { }
  
  getPersonne(num: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${num}`);
  }
  
  createPersonne(personne: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, personne);
  }
  
  updatePersonne(num: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${num}`, value);
  }
  
  deletePersonne(num: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${num}`);
  }

  getPersonnesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
