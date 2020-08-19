import { Server, Model } from 'miragejs';

export default function makeServer({ environment = 'development' } = {}) {
  const server = new Server({
    environment,

    models: {
      user: Model,
      books: Model,
      settings: Model,
    },

    seeds(s) {
      s.create('user', { name: 'Bob' });
      s.create('user', { name: 'Alice' });
    },

    routes() {
      this.post('/login', (schema, req) => {
        console.log('Login Schema - ', schema, '\nLogin req = ', req);
      });
      this.get('/users', (schema) => {
        console.log('Get Users = ', schema);
        return schema.users.all();
      });
    },
  });

  return server;
}
