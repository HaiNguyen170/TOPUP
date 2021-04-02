import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MagazineService, Magazine } from '../service/magazine/magazine.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  selected = '-1';

  selections = ['id', 'firstName', 'lastName', 'email', 'birthday', 'salary'];

  data: Magazine[];

  idcard;

  constructor(private datax: MagazineService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.data = this.datax.getData();
    let idd = this.route.snapshot.paramMap.get('id'); 
    this.idcard = idd;  
  }
}
