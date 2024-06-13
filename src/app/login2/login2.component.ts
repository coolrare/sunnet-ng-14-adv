import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';

@Component({
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {

  data: any = {
    email: 'user@example.com',
    password: '',
    isRememberMe: true
  }

  form: FormGroup = this.fb.group({
    email: this.fb.control(this.data.email),
    password: this.fb.control(this.data.password),
    isRememberMe: this.fb.control(this.data.isRememberMe)
  });

  constructor(@Inject(DOCUMENT) private document: Document, private fb: FormBuilder) { }

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

  doSubmit() {
    if (this.form.valid) {
      // Submit the form
    }

    if (this.form.invalid) {
      // Show error
    }
  }

}
