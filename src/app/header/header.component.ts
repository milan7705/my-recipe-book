import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../authentication/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  public userIsAuthenticated = false;
  private authListenerSubscription: Subscription;


  constructor(private authService: AuthService) { }

  onLogout() {
    this.authService.logout();
  }
ngOnInit() {
  this.authListenerSubscription = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
  })
};
ngOnDestroy() {
  this.authListenerSubscription.unsubscribe();
};

}
