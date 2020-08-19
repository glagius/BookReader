import { Component } from '@angular/core';
import { AuthService } from './core/auth/auth.service';
import { UserInfo } from '~shared/models/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'MovieApp';

  links = [
    { name: 'home', needLogin: false },
    { name: 'favourites', needLogin: true },
    { name: 'options', needLogin: true },
    { name: 'account', needLogin: true },
  ]

  activeLink = 'home'

  user: UserInfo | {} = {}

  isLogged = false

  constructor(private auth: AuthService) {
    this.isLogged = this.auth.isLogged();
  }
}
