/* eslint-disable no-new */
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Server, Response } from 'miragejs';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import makeServer from './server';

if (environment.production) {
  enableProdMode();
}
// @ts-ignore
if (window.Cypress) {
  new Server({
    environment: 'test',
    routes() {
      const methods = ['get', 'put', 'patch', 'post', 'delete'];
      methods.forEach((method) => {
        this[method]('/*', async (schema, request) => {
          // @ts-ignore
          const [status, headers, body] = await window.handleFromCypress(request);
          return new Response(status, headers, body);
        });
      });
    },
  });
}
// ! only for develop without API
makeServer();

document.addEventListener('DOMContentLoaded', () => {
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
});
