import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  constructor(private router: Router) {
  }

  async goLogin() {
    try {
      await this.router.navigate(['login']);
    } catch (e) {
      console.log(e);
    }
  }

}
