import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../environments/environment";


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post(this.baseUrl + 'api/login/', {
      email,
      password
    }, httpOptions);
  }

  register(username: string, email: string, password: string,address:string,phonenumber:string,falcuty_id:string,role:[]): Observable<any> {
    return this.http.post(this.baseUrl + 'api/signup/', {
      username,
      email,
      password,
      address,
      phonenumber,
      falcuty_id,
      role
    }, httpOptions);
  }
}