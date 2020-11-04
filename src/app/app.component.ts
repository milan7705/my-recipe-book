import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/internal/operators/filter';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  hideHeader: boolean;
  dynamicPadding: string;
  constructor(
    private router: Router
  ) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      if (event.url.includes('/signup') || event.urlAfterRedirects.includes('/signup')) {
        this.hideHeader = true;
      } else if (event.url.includes('/login')) {
        this.hideHeader = true;
        this.dynamicPadding = 'p-0';
      }
       else {
        this.hideHeader = false;
        this.dynamicPadding = 'pt-60';
      }
    });
  }
  ngOnInit() {
  }

}
