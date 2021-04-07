import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getUserBoard(id: number): Observable<any> {
    return this.http.get(this.baseUrl + 'api/user/' + id);
  }

  getModeratorBoard(id: number): Observable<any> {
    return this.http.get(this.baseUrl + 'api/user/mod' + id);
  }

  getAdminBoard(id: number): Observable<any> {
    return this.http.get(this.baseUrl + 'api/user/admin' + id);
  }

}