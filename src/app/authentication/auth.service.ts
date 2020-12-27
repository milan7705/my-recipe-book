import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthData } from './auth-data.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authStatusListener = new Subject<boolean>();
  private token: string;

  getToken() {
    return this.token;
  };

  setToken(jwtToken: string) {
    this.token = jwtToken;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }
  createUser(email: string, password: string) {
    const authData: AuthData = {
      email: email,
      password: password
    }
    this.http.post('http://localhost:3000/api/user/signup', authData)
    .subscribe(response => {
      console.log(response)
    })
  }

  loginUser(email: string, password: string) {
    const authData: AuthData = {
      email: email,
      password: password
    };
    this.http.post<{token: string}>('http://localhost:3000/api/user/login', authData)
    .subscribe(response => {
      console.log(response);
      const token = response.token;
      this.token = token;
      localStorage.setItem('jwt_token', this.token);
      this.authStatusListener.next(true);
      this.router.navigate(['/recipe-list']);
    });
  }
  logout () {
    this.token = null;
    this.authStatusListener.next(false)
    localStorage.removeItem('jwt_token');
    this.router.navigate(['/login'])

  }

  setAuthLogin(isLogged: boolean) {
    this.authStatusListener.next(isLogged);
  }

  constructor(private http: HttpClient, private router: Router) { }
  }
