export interface LoginInfo {
  login: string;
  password: string;
}
export interface UserInfo {
  firstName: string;
  lastName: string;
  email: string;
  favourites: string[] | [];
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

/**
 * Book Author
 */
export interface Author {
  id: string;
  firstName: string;
  lastName: string;
  books: Book[];
  info?: string;
}

/**
 * Books statuses
 */
export enum BookStatus {
  new = 'new',
  bestseller = 'bestseller',
}
export interface Book {
  id: string;
  title: string;
  description: string;
  author: string; // Change this to Author model
  pages?: string;
  price?: string;
  logo?: string;
  status?: BookStatus;
  // and many others
}
