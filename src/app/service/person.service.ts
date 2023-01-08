import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Person} from '../model/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  URL = "http://localhost:8082/api/v1/person/";

  constructor(private http: HttpClient) {
  }

  public findById(): Observable<Person> {
    // tiene que estar corriendo spring, caso contrario no muestra.
    return this.http.get<Person>(this.URL + "findById/1");
  }

}
