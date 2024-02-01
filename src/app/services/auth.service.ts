import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface User {
  username: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export interface loginUser {
  username: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signup(user: User) {
    return this.http.post('http://127.0.0.1:3000/api/v1/user/signup', user);
  }

  login(user: any) {
    return this.http.post('http://127.0.0.1:3000/api/v1/user/login', user);
  }
}
