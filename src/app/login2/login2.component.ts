import { DOCUMENT, CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css'],
})
export class Login2Component implements OnInit {
  data: any = {
    users: [
      {
        email: 'user@example.com',
        password: '',
      },
      {
        email: 'user2@example.com',
        password: '123',
      }
    ],
    isRememberMe: true,
  };
  form = this.fb.group({
    users: this.fb.array([
      this.fb.group({
        email: this.fb.control('user2@example.com', {
          validators: [Validators.required, Validators.email],
          asyncValidators: [],
          updateOn: 'blur',
          nonNullable: true,
        }),
        password: this.fb.control('', {
          validators: [
            Validators.required,
            Validators.minLength(6),
            Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/),
          ],
          asyncValidators: [],
          updateOn: 'blur',
          nonNullable: true,
        }),
      }),
      this.fb.group({
        email: this.fb.control('user2@example.com', {
          validators: [Validators.required, Validators.email],
          asyncValidators: [],
          updateOn: 'blur',
          nonNullable: true,
        }),
        password: this.fb.control('', {
          validators: [
            Validators.required,
            Validators.minLength(6),
            Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/),
          ],
          asyncValidators: [],
          updateOn: 'blur',
          nonNullable: true,
        }),
      }),
    ]),
    isRememberMe: this.fb.control(true, {
      validators: [],
      asyncValidators: [],
      updateOn: 'change',
      nonNullable: true,
    }),
  });
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private fb: FormBuilder
  ) {}

  doReset() {
    this.form.reset();
  }

  ngOnInit(): void {
    this.document.body.classList.add('bg-gradient-primary');

    this.form.setValue(this.data);

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
