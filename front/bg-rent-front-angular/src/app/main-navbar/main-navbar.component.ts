import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.css']
})
export class MainNavbarComponent implements OnInit {

  events = ['event1', 'event2'];
  selectedEvent: string = this.events[0];

  constructor() { }

  ngOnInit() {
  console.log(this.selectedEvent);
  }

  changeEvent() {
    console.log('click', this.selectedEvent);
  }
}
