import { render, screen } from '@testing-library/angular';
import { MatTabsModule } from '@angular/material/tabs';
import { AppComponent } from './app.component';
import { BookComponent } from './modules/book/pages/book/book.component';
import { LoginComponent } from './modules/login/pages/login/login.component';
import { FavouritesComponent } from './modules/favourites/pages/favourites/favourites.component';
import { OptionsComponent } from './modules/options/pages/options/options.component';
import { AccountComponent } from './modules/account/pages/account/account.component';
import { HomeComponent } from './modules/home/pages/home/home.component';

describe('App main component', () => {
  test('should render navigation panel', async () => {
    const { navigate } = await render(AppComponent, {
      imports: [MatTabsModule],
      declarations: [
        BookComponent,
        HomeComponent,
        LoginComponent,
        FavouritesComponent,
        OptionsComponent,
        AccountComponent],
      routes: [
        {
          path: '',
          redirectTo: '/home',
          pathMatch: 'full',
        },
        {
          path: 'home/:book',
          component: BookComponent,
        },
        {
          path: 'favourites/:book',
          component: BookComponent,
        },
        {
          path: 'login',
          component: LoginComponent,
          canActivate: [], // add guard here
        },
        {
          path: 'favourites',
          component: FavouritesComponent,
        },
        {
          path: 'options',
          component: OptionsComponent,
        },
        {
          path: 'account',
          component: AccountComponent,
        },
        {
          path: 'home',
          component: HomeComponent,
        },
        {
          path: '**',
          redirectTo: '/home',
        },
      ],
    });

    const favourites = screen.getByTestId(/favourites/i);
    const navigation = screen.getByTestId(/navigation/i);
    expect(navigation).toBeInTheDocument();
    await navigate(favourites);
    expect(screen.getByText(/favourites works/i));
  });
});
