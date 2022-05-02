import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventdemo',
  templateUrl: './eventdemo.component.html',
  styleUrls: ['./eventdemo.component.css']
})
export class EventdemoComponent implements OnInit {

  constructor() { }

  name: string="Guest";

display(name:string){
  this.name=name;
  console.log("Name : "+this.name);
}

  ngOnInit() {
  }

}
