import { Model, Factory } from 'miragejs';
import faker from 'faker';
import { UserInfo, Book, BookStatus } from '~app/shared/models/models';

const bookImages = [
  './assets/becoming.png',
  './assets/gentleman.png',
  './assets/hurt.png',
  './assets/ingredients.png',
];
const bookStatuses: BookStatus[] = [
  BookStatus.bestseller, BookStatus.new,
];
// Mocks for Mirage.js
export const models = {
  user: Model,
  books: Model,
  setting: Model,
};

export const UserModel: UserInfo = {
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  favourites: ['1', '2', '3'],
  settings: null,
};

export const BookModel: Book = {
  id: faker.random.arrayElement(['1', '2', '3']),
  title: faker.name.title(),
  description: faker.lorem.paragraph(),
  author: `${faker.name.lastName()} ${faker.name.firstName()}`,
  pages: `${faker.random.number()}`,
  price: faker.commerce.price(),
  logo: faker.random.arrayElement(bookImages),
  status: faker.random.arrayElement(bookStatuses),
};

export const factories = {
  user: Factory.extend(UserModel),
  book: Factory.extend(BookModel),
};
