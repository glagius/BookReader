import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/login/pages/login/login.component';
import { FavouritesComponent } from './modules/favourites/pages/favourites/favourites.component';
import { OptionsComponent } from './modules/options/pages/options/options.component';
import { BookComponent } from './modules/book/pages/book/book.component';
import { AccountComponent } from './modules/account/pages/account/account.component';
import { HomeComponent } from './modules/home/pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
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
    canActivate: [] // add guard here
  },
  {
    path: 'favourites',
    component: FavouritesComponent,
  },
  // TODO: move account to nested route of options
  {
    path: 'options',
    component: OptionsComponent
  },
  {
    path: 'account',
    component: AccountComponent
  },
  {
    path: '**',
    redirectTo: '/home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
