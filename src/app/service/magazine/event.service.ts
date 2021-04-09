import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../../environments/environment";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

export interface Event{
 year:number;
  }

@Injectable({
  providedIn: 'root'
})
export class EventService {

  baseUrl = environment.baseUrl;

  data: Event[]=[
    {year:2019},
    {year:2020},
    {year:2021},
  ]

  constructor(private http: HttpClient) { }

  register(name: string, des: string, faculty:string, date:Date): Observable<any> {
    return this.http.post(this.baseUrl + 'api/create/', {
      name,
      des,
      faculty,
      date
    }, httpOptions);
  }

  getData(): Event[] {
    return this.data;
  }
}
