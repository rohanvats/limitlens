import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator } from '@angular/forms';
import { catchError, debounceTime, map, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UniqueUsername implements AsyncValidator {
  constructor(private http: HttpClient) {}

  validate = (control: AbstractControl): any => {
    const url = `${environment.URL}/check-username`;
    const { value } = control;
    console.log('value...', value);

    return this.http
      .post<any>(url, {
        username: value,
      })
      .pipe(
        debounceTime(2000),
        tap((value) => console.log('value..', value.message)),
        map((value): any => {
          if (value.message === 'available') {
            return null;
          } else {
            return { usernameExists: true };
          }
        }),
        catchError((err) => {
          console.log('err...', err);
          return of({ noInternet: true });
        })
      );
  };
}
