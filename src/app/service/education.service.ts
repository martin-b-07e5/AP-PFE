import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Education} from "../model/education.model";

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  URL = "http://localhost:8080/api/v1/education/";
  // URL = "https://ap-pbe-production.up.railway.app/api/v1/education/";

  constructor(private httpClient: HttpClient) {
  }

  // READ ------------------------
  public findAll(): Observable<Education[]> {
    return this.httpClient.get<Education[]>(this.URL + "findAll");
  }

  public getAll(): Observable<Education[]> {
    return this.httpClient.get<Education[]>(this.URL + "getAll");
  }

  public getById(id: number): Observable<Education> {
    return this.httpClient.get<Education>(this.URL + "getById/${id}")
  }

  public detail(id: number): Observable<Education> {
    return this.httpClient.get<Education>(this.URL + `detail/${id}`);
  }

  // CREATE ------------------------
  public add(education: Education): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'add', education)
  }

  // UPDATE pending ------------------------
  public update(id: number, education: Education): Observable<any> {
    return this.httpClient.put<any>(this.URL + `update/${id}`, education);
  }

  // DELETE pending ------------------------
  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }

}
