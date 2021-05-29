import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-module',
  templateUrl: './time-module.component.html',
  styleUrls: ['./time-module.component.css']
})
export class TimeModuleComponent implements OnInit {

  t1:string = new Date().toLocaleTimeString();
  timeupdate:string = new Date().toDateString();

  constructor() { 

  }

  ngOnInit(): void {
  }

}
