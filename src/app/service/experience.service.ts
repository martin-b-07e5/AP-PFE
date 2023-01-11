import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Education} from "../model/experience.model";

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  URL = "http://localhost:8082/api/v1/experience/";

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
  public add(experience: Education): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'add', experience)
  }

  // UPDATE pending ------------------------
  public update(id: number, experience: Education): Observable<any> {
    return this.httpClient.put<any>(this.URL + `update/${id}`, experience);
  }

  // DELETE pending ------------------------
  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }

}
