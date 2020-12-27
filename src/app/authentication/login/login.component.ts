import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  myEmail = new FormControl('', [Validators.required, Validators.email]);
  isLoading = false;

  getErrorMessage() {
    if (this.myEmail.hasError('required')) {
      return 'You must enter a value';
    }
    return this.myEmail.hasError('email') ? 'Not a valid email' : '';
  }



  constructor(public authService: AuthService, private router: Router) { }

onLogin(form: NgForm) {
  if(form.invalid) {
    return;
  }
  this.isLoading = true;
  this.authService.loginUser(form.value.email, form.value.password)
}

onSignup() {
  this.router.navigate(['/signup'])
}

  ngOnInit(): void {
  }

}
