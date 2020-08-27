import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Subject } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { Book } from '~app/shared/models/models';

const baseUrl = '/books';

@Injectable({
  providedIn: 'root',
})
export class BooksDataService {
  public books: Subject<Book[]> = new Subject()

  constructor(
    private http: HttpClient,
  ) { }

  public getBooks() {
    this.http.get(baseUrl)
      .pipe(
        retry(3),
        catchError(this.handleError),
        tap((res) => console.warn('Res = ', res)),
      )
      .subscribe((res: Book[]) => this.books.next(res));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, `
        + `body was: ${error.error}`,
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.',
    );
  }
}
