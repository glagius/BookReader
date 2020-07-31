import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountModule } from './modules/account/account.module';
import { AsideModule } from './modules/aside/aside.module';
import { HomeModule } from './modules/home/home.module';
import { BookModule } from './modules/book/book.module';
import { FavouritesModule } from './modules/favourites/favourites.module';
import { LoginModule } from './modules/login/login.module';
import { CoreModule } from './core/core.module';

const MaterialModules = [MatTabsModule];
const PageModules = [AccountModule, HomeModule, BookModule, FavouritesModule, LoginModule];

@NgModule({
  imports: [
    CoreModule,
    AsideModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...MaterialModules,
    ...PageModules,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
