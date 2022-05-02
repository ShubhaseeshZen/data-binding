import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertydemo',
  templateUrl: './propertydemo.component.html',
  styleUrls: ['./propertydemo.component.css']
})
export class PropertydemoComponent implements OnInit {

  name:string="Guest";
  constructor() { }

  ngOnInit() {
  }

}
