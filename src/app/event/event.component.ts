import { Component, OnInit } from '@angular/core';
import { EventService, Event } from '../service/magazine/event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  selected = '-1';

  selections = ['year'];

  data: Event[];  

  constructor(data: EventService) {
    this.data = data.getData();
  }

  ngOnInit(): void {
  }

}
