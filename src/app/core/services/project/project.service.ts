import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Project} from '../../models/project';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {User} from '../../models/user';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private httpClient :HttpClient) {  }



  public add(project:Project):Observable<Project>{
    return this.httpClient.post<Project>(`${environment.urlBackend}projects`, project)
  }
  public update(id: string, project: Project): Observable<Project> {
    return this.httpClient.patch<Project>(`${environment.urlBackend}projects/${id}`, project)
  }

  public findById(id: string): Observable<Project> {
    return this.httpClient.get<Project>(`${environment.urlBackend}projects/${id}`);
  }

  public findManager(id: string): Observable<User> {
    return this.httpClient.get<User>(`${environment.urlBackend}projects/${id}/manager`);
  }

  public findDevelopers(id: string): Observable<User[]> {
    return this.httpClient.get<any>(`${environment.urlBackend}projects/${id}/developers`)
      .pipe(map(result => result._embedded.users));;
  }

  public getAllProjects(): Observable<Project[]> {
    return this.httpClient.get<any>(`${environment.urlBackend}projects`)
      .pipe(map(result => result._embedded.projects));
  }

  public delete(id: string): Observable<any> {

    return this.httpClient.delete(`${environment.urlBackend}users/${id}`);
  }
}
