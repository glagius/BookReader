import { Server } from 'miragejs';
import { models as coreModels, factories as coreFactories } from './app/core/mocks';

export default function makeServer({
  environment = 'development',
  timing = 2000,
  models = coreModels,
  factories = coreFactories,
} = {}) {
  const server = new Server({
    environment,
    timing,
    logging: true,

    // models: {
    //   user: Model,
    //   book: Model,
    //   setting: Model,
    // },
    models,
    factories,
    // factories: {
    //   user: Factory.extend({
    //   }),
    //   book: Factory.extend({

    //   }),
    // setting: Factory.exten
    // },
    seeds(s) {
      s.createList('user', 1);
      s.createList('book', 10);
    },

    routes() {
      // this.post('/login', (schema, req) => {
      //   console.log('Login Schema - ', schema, '\nLogin req = ', req);
      // });
      this.get('/books');
      this.get('/books/:id');
      this.get('/users/:id');
      // this.get('/users/:id', 'favourites');
    },
  });

  return server;
}
