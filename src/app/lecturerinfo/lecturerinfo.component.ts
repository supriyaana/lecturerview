import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lecturerinfo',
  templateUrl: './lecturerinfo.component.html',
  styleUrls: ['./lecturerinfo.component.css']
})
export class LecturerinfoComponent implements OnInit {
  lecturers =[
  {name:"Sarita",mobile:"9324567802",address:"Pune",salary:"10000",date:"12/4/2017", qualification:"MCA"}

  ];

  constructor() { }

  ngOnInit() {
  }

}
