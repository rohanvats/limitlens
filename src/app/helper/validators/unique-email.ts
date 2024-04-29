import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { Observable, debounce, debounceTime, map, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UniqueEmail implements AsyncValidator {
  constructor(private http: HttpClient) {}

  validate = (control: AbstractControl<any, any>): any => {
    const { value } = control;
    const url = `${environment.URL}/check-email`;

    return this.http.post<any>(url, { email: value }).pipe(
      debounceTime(2000),
      tap((value) => console.log(value)),
      map((value): any => {
        if (value.message === 'available') {
          return null;
        } else {
          return { emailExists: true };
        }
      })
    );

    return of([]);
  };
}
