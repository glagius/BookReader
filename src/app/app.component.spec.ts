/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/// <reference types="Cypress" />

import { mount, initEnv, setConfig } from 'cypress-angular-unit-test';
import { MatTabsModule } from '@angular/material/tabs';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AuthGuard } from './core/guards/auth.guard';
import { AuthService } from './core/auth/auth.service';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './modules/home/home.module';
import { LoginModule } from './modules/login/login.module';
import { BookModule } from './modules/book/book.module';
import { FavouritesModule } from './modules/favourites/favourites.module';
import { OptionsModule } from './modules/options/options.module';
import { AccountModule } from './modules/account/account.module';

describe('Basics', () => {
  beforeEach(() => {
    setConfig({ cssFile: 'node_modules/@angular/material/prebuilt-themes/indigo-pink.css' });
    initEnv(AppComponent, {
      imports: [
        AppRoutingModule,
        MatTabsModule,
        HomeModule,
        LoginModule,
        BookModule,
        FavouritesModule,
        OptionsModule,
        AccountModule,
      ],
      providers: [AuthService, AuthGuard, { provide: APP_BASE_HREF, useValue: '/' }],
    });
  });
  it('Shows navigation panel', () => {
    const fixture = mount(AppComponent, {});
    fixture.detectChanges();
    cy.findByTestId(/navigation/).should('exist');
  });
});
