export interface LoginInfo {
  login: string;
  password: string;
}
export interface UserInfo {
  firstName: string;
  lastName: string;
  email: string;
  favourites: Book[] | [];
  settings: AccountSettings;
}

export interface AccountSettings {
  settings: object;
}
export interface RegistrationInfo {
  login: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface Author {
  id: string;
  firstName: string;
  lastName: string;
  books: Book[];
  info?: string;
}

export interface Book {
  id: string;
  title: string;
  description: string;
  author: Author;
  pages?: string;
  price?: string;
  // and many others
}
