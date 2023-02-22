import {Component} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  collapsed = true;

  constructor(public authService: AuthService, private router: Router) {
  }

  async logout() {
    await this.authService.logout();
    await this.router.navigate(['/login']);
  }
}
