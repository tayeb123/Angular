import {Injectable} from '@angular/core';
import {User} from '../../models/user';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {observableToBeFn} from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[];

  constructor(private httpc: HttpClient) {
  }


  public getAllUsers(): Observable<User[]> {
    //const observable=this.httpClient.get<any>()
    //return this.httpc.get<any>(api).pipe(map((result=>result._embedded.users)));
    return this.httpc.get<any>(`${environment.urlBackend}users`)
      .pipe(map(result => result._embedded.users));


  }
/*
  public addUser(user: User) {
    return this.httpc.post(`${environment.urlBackend}users`, user).subscribe();
  }

  public findById(id: string): Observable<User> {

    return this.httpc.get<User>(`${environment.urlBackend}users/${id}`);
  }

  public editById(id: string, user: User): Observable<User> {

    return this.httpc.patch<User>(`${environment.urlBackend}users/${id}`, user);
  }

  public delete(id: string): Observable<any> {

    return this.httpc.delete(`${environment.urlBackend}users/${id}`);

  }*/



  public addUser(user: User): Observable<User> {

    return this.httpc.post<User>(`${environment.urlBackend}users`, user);
  }
  public findById(id: string): Observable<User> {

    return this.httpc.get<User>(`${environment.urlBackend}users/${id}`);
  }
  public editById(id: string, user: User): Observable<User> {

    return this.httpc.patch<User>(`${environment.urlBackend}users/${id}`, user);
  }
  public delete(id: string): Observable<any> {

    return this.httpc.delete(`${environment.urlBackend}users/${id}`);
  }

}
