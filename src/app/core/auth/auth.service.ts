import { Injectable } from '@angular/core';
import { LoginInfo, UserInfo } from '~shared/models/models';

@Injectable()
export class AuthService {
  private isLoggedIn = false

  private user: UserInfo = null

  public isLogged() {
    return this.isLoggedIn;
  }

  public login(user: LoginInfo) {
    // fake http request
    setTimeout(() => {
      this.user = {
        firstName: 'Mark',
        lastName: 'Connor',
        email: 'some@port.vue',
        favourites: [],
        settings: null,
      };
    }, 3000);
  }
}
