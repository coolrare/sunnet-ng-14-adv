import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data: any = {}

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    this.document.body.classList.add('bg-gradient-primary');

    // if (this.form.invalid) {
    //   ShowError();
    // }

    // if (this.form.valid) {
    //   SubmitEvent();
    // }

  }
  ngOnDestroy(): void {
    this.document.body.classList.remove('bg-gradient-primary');
  }

}
