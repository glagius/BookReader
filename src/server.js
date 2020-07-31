import { Server, Model } from 'miragejs';

export default function makeServer({ environment = 'development' } = {}) {
  const server = new Server({
    environment,

    models: {
      user: Model,
    },

    seeds(s) {
      s.create('user', { name: 'Bob' });
      s.create('user', { name: 'Alice' });
    },

    routes() {
      this.namespace = 'api';

      this.get('/users', (schema) => schema.users.all());
    },
  });

  return server;
}
