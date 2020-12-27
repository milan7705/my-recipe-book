import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  hide = true;
  isLoading = false;

  constructor(public authService: AuthService, private router: Router) { }

  onSignup(form: NgForm) {
    if(form.invalid) {
      return;
    } else {
      this.isLoading = true;
      this.authService.createUser(form.value.email, form.value.password);
      this.router.navigate(['/login']);
    }
  }

  ngOnInit(): void {
  }

}
