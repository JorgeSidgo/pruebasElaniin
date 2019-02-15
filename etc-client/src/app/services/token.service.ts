import { Injectable } from '@angular/core';

const TOKEN = 'etc_token';
const USER = 'etc_user';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  setToken(token: string, user: string): void {
    localStorage.setItem(TOKEN, token);
    localStorage.setItem(USER, user);
  }

  isLogged() {
    return localStorage.getItem(TOKEN) != null;
  }

  getToken() {
    return localStorage.getItem(TOKEN);
  }

  getUserName() {
    return localStorage.getItem(USER);
  }
  eraseToken() {
    localStorage.removeItem(TOKEN);
    localStorage.removeItem(USER);
  }
}
