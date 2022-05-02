
import { Component, OnInit } from '@angular/core';
import { User } from './user';
@Component({
  selector: 'app-twowaydemo',
  templateUrl: './twowaydemo.component.html',
  styleUrls: ['./twowaydemo.component.css']
})
export class TwowaydemoComponent implements OnInit {
  
  user: User = {
    age: 12,
    name: 'Windstorm'
  };
  constructor(){
    // Initializing User instance
  }

  ngOnInit() {
  }

}