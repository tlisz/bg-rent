import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rent-game',
  templateUrl: './rent-game.component.html',
  styleUrls: ['./rent-game.component.css']
})
export class RentGameComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('rent game');
  }

}
