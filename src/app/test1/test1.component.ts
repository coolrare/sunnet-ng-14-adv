import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  fb = inject(FormBuilder);

  ctrl: FormControl = this.fb.control('', [Validators.required]);

  constructor() { }

  ngOnInit(): void {
  }

}
