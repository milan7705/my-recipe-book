import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  myEmail = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.myEmail.hasError('required')) {
      return 'You must enter a value';
    }

    return this.myEmail.hasError('email') ? 'Not a valid email' : '';
  }

  

  constructor() { }

  ngOnInit(): void {
  }

}
