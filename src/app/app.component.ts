import { Component } from '@angular/core';
import { AuthService } from './core/auth/auth.service';
import { UserInfo } from '~shared/models/models';
import { BooksDataService } from './core/http/books-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'MovieApp';

  public links = [
    { name: 'home', needLogin: false },
    { name: 'favourites', needLogin: true },
    { name: 'options', needLogin: true },
    { name: 'account', needLogin: true },
  ]

  public activeLink = 'home'

  public user: UserInfo | {} = {}

  public isLogged = false

  constructor(
    private auth: AuthService,
    private booksService: BooksDataService,
  ) {
    this.isLogged = this.auth.isLogged();
    this.booksService.getBooks();
  }
}
