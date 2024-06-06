import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  id: string | null = '';

  meta: string | null = '';
  name: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.id = this.route.snapshot.paramMap.get('id');
    this.meta = this.route.snapshot.paramMap.get('meta');

    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      // this.meta = params.get('meta');
    });

    // this.name = this.route.snapshot.queryParamMap.get('name');

    this.route.queryParamMap.subscribe(params => {
      this.name = params.get('name');
    });

  }

}
