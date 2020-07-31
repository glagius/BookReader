import { render, screen } from '@testing-library/angular';
import { MatTabsModule } from '@angular/material/tabs';
import { AppComponent } from './app.component';
import { BookComponent } from './modules/book/pages/book/book.component';
import { LoginComponent } from './modules/login/pages/login/login.component';
import { FavouritesComponent } from './modules/favourites/pages/favourites/favourites.component';
import { OptionsComponent } from './modules/options/pages/options/options.component';
import { AccountComponent } from './modules/account/pages/account/account.component';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { routes } from './app-routing.module';
import { AuthGuard } from './core/guards/auth.guard';
import { AuthService } from './core/auth/auth.service';

const setup = async (data, handleClick = jest.fn()) => {
  const component = await render(AppComponent, {
    componentProperties: {
      ...data,
      handleClick,
    },
    imports: [MatTabsModule],
    providers: [AuthService, AuthGuard],
    declarations: [
      BookComponent,
      HomeComponent,
      LoginComponent,
      FavouritesComponent,
      OptionsComponent,
      AccountComponent],
    routes,
  });
  return {
    ...component, handleClick,
  };
};

let appComponent;

beforeEach(async () => {
  appComponent = await setup({});
});

describe('App home component', () => {
  test('Should render navigation panel', async () => {
    const navigation = screen.getByTestId(/navigation/i);
    expect(navigation).toBeInTheDocument();
  });

  test('Home page must have at least 3 row blocks', async () => {
  });

  test('Heading show user name, when user logged in', async () => {

  });

  test('Guest can\'t reach account / favourites / options pages, when he hasn\'t logged in', async () => {
    const { navigate } = appComponent;
    const favourites = screen.getByTestId(/favourites/i);
    const account = screen.getByTestId(/account/i);
    const options = screen.getByTestId(/options/i);

    await navigate(options);
    expect(screen.getByText(/Please, login first/i));

    await navigate(favourites);
    expect(screen.getByText(/Please, login first/i));

    await navigate(account);
    expect(screen.getByText(/Please, login first/i));
  });
});
