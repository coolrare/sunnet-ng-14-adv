import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data: any = {
    email: 'user@example.com',
    password: '',
    isRememberMe: true
  }

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

  doSubmit(form: NgForm) {
    if (form.valid) {
      // Submit the form
    }

    if (form.invalid) {
      // Show error
    }
  }

}
