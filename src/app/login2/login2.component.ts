import { DOCUMENT, CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { twIdValidator } from '../shared/validators/twIdValidator';

@Component({
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css'],
})
export class Login2Component implements OnInit {
  data: any = {
    users: [
      {
        email: 'user1@example.com',
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
        email: this.fb.control('', {
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
      })
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

  addUserFields(defaultEmail: string = '', defaultPassword: string = '') {
    this.form.controls.users.push(
      this.fb.group({
        email: this.fb.control(defaultEmail, {
          // validators: [Validators.required, Validators.email],
          validators: [twIdValidator('老兄，你忘了填寫身份證字號！')],
          asyncValidators: [],
          updateOn: 'blur',
          nonNullable: true,
        }),
        password: this.fb.control(defaultPassword, {
          validators: [
            Validators.required,
            Validators.minLength(6),
            Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/),
          ],
          asyncValidators: [],
          updateOn: 'blur',
          nonNullable: true,
        }),
      })
    );
  }

  doReset() {
    this.form.reset();
  }

  ngOnInit(): void {
    this.document.body.classList.add('bg-gradient-primary');

    if (this.data.users.length > 0) {
      this.form.controls.users.clear();
      this.data.users.forEach((user: any) => {
        this.addUserFields(user.email, user.password);
      });
    }

    this.form.setValue(this.data);

    // this.form.controls.users.clear();
    // this.form.controls.users.push();
    // this.form.controls.users.removeAt();

    // this.form.addControl();
    // this.form.removeControl();



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
