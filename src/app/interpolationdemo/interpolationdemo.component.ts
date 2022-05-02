import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'interpolation',
  templateUrl: './interpolationdemo.component.html',
  styleUrls: ['./interpolationdemo.component.css']
})
export class InterpolationdemoComponent implements OnInit {

  name="Thanesh";
  getInlineFunc(){
    return "Just For Demo"
  }
  constructor() { }

  ngOnInit() {
  }

}
