import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lectures',
  templateUrl: './lectures.component.html',
  styleUrls: ['./lectures.component.css']
})
export class LecturesComponent implements OnInit {
  lect= [
      {id: 1, lecture:"MongoDb",hall_num:"123", date:"12/3/2017"},
      {id: 2, lecture:"JS",hall_num:"456",date:"10/9/2017"},
    ];
        

  constructor() { }

  ngOnInit() {
  }

}
