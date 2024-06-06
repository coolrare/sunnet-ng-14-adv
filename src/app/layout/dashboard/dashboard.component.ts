import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { chartAreaDemo } from 'src/app/chartAreaDemo';
import { chartPieDemo } from 'src/app/chartPieDemo';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    chartAreaDemo();
    chartPieDemo();
  }

  goToTables1() {
    this.router.navigateByUrl('/tables/999?name=Will');
  }

  goToTables2() {
    this.router.navigate(['/tables', 998, { meta: true }], {
      queryParams: {
        name: 'John'
      }
    });
  }

}
