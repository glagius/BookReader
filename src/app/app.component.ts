import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'MovieApp';

  links = ['home', 'favourites', 'options', 'account']

  activeLink = this.links[0]
}
