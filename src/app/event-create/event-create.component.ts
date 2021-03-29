import { Component, OnInit } from '@angular/core';
import { EventService, Event } from '../service/magazine/event.service';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent implements OnInit {

  form: any = {
    name: null,
    des: null,
    faculty: null,
    date: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { name, des,faculty, date  } = this.form;

    this.eventService.register(name, des, faculty, date ).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

}
