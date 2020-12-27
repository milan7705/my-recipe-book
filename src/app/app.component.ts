import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/internal/operators/filter';
import { AuthService } from './authentication/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  hideHeader: boolean;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {

      if (localStorage.getItem('jwt_token')) {
        this.authService.setToken(localStorage.getItem('jwt_token'));
        this.authService.setAuthLogin(true);

      }

      if (event.urlAfterRedirects.includes('/signup') || event.urlAfterRedirects.includes('/login')) {
        this.hideHeader = true;
      } else {
        this.hideHeader = false;
      }
    });
  }
  ngOnInit() {
  }

}
