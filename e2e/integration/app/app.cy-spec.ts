/* eslint-disable no-undef */
import makeServer from '../../../src/server';

describe('First test', () => {
  let server;

  // More info about mirage and cypress you can find here https://miragejs.com/quickstarts/cypress/
  beforeEach(() => {
    server = makeServer({ environment: 'test' });
  });

  afterEach(() => {
    server.shutdown();
  });

  it('should visit home page', () => {
    cy.visit('/home');
  });
});
