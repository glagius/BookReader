import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccountModule } from './modules/account/account.module';
import { AsideModule } from './modules/aside/aside.module';
import { HomeModule } from './modules/home/home.module';
import { BookModule } from './modules/book/book.module';
import { FavouritesModule } from './modules/favourites/favourites.module';
import { LoginModule } from './modules/login/login.module';

@NgModule({
  imports: [
    AccountModule,
    AsideModule,
    HomeModule,
    BookModule,
    FavouritesModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
