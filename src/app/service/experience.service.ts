import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Experience} from "../model/experience.model";

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  // URL = "http://localhost:8080/api/v1/experience/";
  URL = "https://ap-front--2023-01-12--firebase.web.app/api/v1/experience/";

  constructor(private httpClient: HttpClient) {
  }

  // READ ------------------------
  public findAll(): Observable<Experience[]> {
    return this.httpClient.get<Experience[]>(this.URL + "findAll");
  }

  public getAll(): Observable<Experience[]> {
    return this.httpClient.get<Experience[]>(this.URL + "getAll");
  }

  public getById(id: number): Observable<Experience> {
    return this.httpClient.get<Experience>(this.URL + "getById/${id}")
  }

  public detail(id: number): Observable<Experience> {
    return this.httpClient.get<Experience>(this.URL + `detail/${id}`);
  }

  // CREATE ------------------------
  public add(experience: Experience): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'add', experience)
  }

  // UPDATE pending ------------------------
  public update(id: number, experience: Experience): Observable<any> {
    return this.httpClient.put<any>(this.URL + `update/${id}`, experience);
  }

  // DELETE pending ------------------------
  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }

}
