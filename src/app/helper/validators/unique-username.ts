import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator } from '@angular/forms';
import { catchError, debounceTime, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UniqueUsername implements AsyncValidator {
  constructor(private http: HttpClient) {}

  validate = (control: AbstractControl): any => {
    const url = 'http://127.0.0.1:3000/api/v1/user/checkusername';
    const { value } = control;
    return this.http
      .post<any>(url, {
        username: value,
      })
      .pipe(
        debounceTime(2000),
        map((value): any => {
          if (value.usernameExists) {
            return null;
          }
        }),
        catchError((err) => {
          console.log('err...', err);
          return of({ usernameExists: err.error });
        })
      );
  };
}
