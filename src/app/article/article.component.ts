import { Component, OnInit } from '@angular/core';
import { MagazineService, Magazine } from '../service/magazine/magazine.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  selected = '-1';

  selections = ['id', 'title', 'file', 'user', 'faculty'];

  data: Magazine[];

  constructor(data: MagazineService) {
    this.data = data.getData();
  }

  ngOnInit(): void {
  }

}
