import { Injectable } from '@angular/core';

export interface Magazine{
id: number;
  title:string;
  file:string;
  user:string;
  faculty:string;
}


@Injectable({
  providedIn: 'root'
})
export class MagazineService {
  data: Magazine[]=[
    {
      "id": 1,
  "title": "The Importance of Bio-tech",
  "file": "a",
  "user": "John",
  "faculty":"I.T"
    },
    {
      "id": 2,
  "title": "Travis Scott: New music of our time",
  "file": "a",
  "user": "Chase",
  "faculty":"Social"
    },
    {
      "id": 3,
  "title": "What is Bitcoin?",
  "file": "a",
  "user": "Elise",
  "faculty":"Business"
    },{
      "id": 4,
  "title": "A Trip to the Moon",
  "file": "a",
  "user": "Jay",
  "faculty":"Science"
    },{
      "id": 5,
  "title": "The Grammy: A Fashion Statement",
  "file": "a",
  "user": "Aprxel",
  "faculty":"Music & Art"
    },{
      "id": 6,
  "title": "Machine learning: A modern future",
  "file": "a",
  "user": "Mike",
  "faculty":"I.T"
    },{
      "id": 7,
  "title": "The Industries of Gaming",
  "file": "a",
  "user": "Peter",
  "faculty":"I.T"
    },{
      "id": 8,
  "title": "Partners in equality",
  "file": "a",
  "user": "Tony",
  "faculty":"Business"
    },{
      "id": 9,
  "title": "The Truth about Cryptocurrency",
  "file": "a",
  "user": "Charlie",
  "faculty":"Business"
    },{
      "id": 10,
  "title": "The Power of Personality",
  "file": "a",
  "user": "May",
  "faculty":"Social"
    },{
      "id": 11,
  "title": "A World Leader in Converting Technologies",
  "file": "a",
  "user": "Ethan",
  "faculty":"I.T"
    },{
      "id": 12,
  "title": "Copyright Infringement",
  "file": "a",
  "user": "Harry",
  "faculty":"Music & Art"
    },{
      "id": 13,
  "title": "Why bat viruses are dangerous",
  "file": "a",
  "user": "Simon",
  "faculty":"Science"
    },{
      "id": 14,
  "title": "On Business Model Innovation",
  "file": "a",
  "user": "Felix",
  "faculty":"Business"
    },{
      "id": 15,
  "title": "Remote Learning Isn’t Just for Kids",
  "file": "a",
  "user": "Liz",
  "faculty":"I.T"
    },{
      "id": 16,
  "title": "Face Foward",
  "file": "a",
  "user": "Stacy",
  "faculty":"Social"
    },{
      "id": 17,
  "title": "Architectire on edge",
  "file": "a",
  "user": "Ted",
  "faculty":"Architect"
    },{
      "id": 18,
  "title": "A.I Analytics",
  "file": "a",
  "user": "Don",
  "faculty":"I.T"
    },
    {
      "id": 19,
  "title": "How COVID-19 affect the film industry",
  "file": "a",
  "user": "Kylie",
  "faculty":"Music & Art"
    },
    {
      "id": 20,
  "title": "Science and Culture",
  "file": "a",
  "user": "Tobi",
  "faculty":"Science"
    },
  ]

  constructor() { }

  getData(): Magazine[] {
    return this.data;
  }
}
