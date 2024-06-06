import { Component, OnInit } from '@angular/core';
import { chartAreaDemo } from 'src/app/chartAreaDemo';
import { chartPieDemo } from 'src/app/chartPieDemo';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    chartAreaDemo();
    chartPieDemo();
  }

}
