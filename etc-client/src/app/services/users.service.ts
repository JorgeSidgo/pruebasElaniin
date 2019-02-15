import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../interfaces/user';
import {Role} from '../interfaces/roles';
import {TokenService} from './token.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  API_URL = 'http://localhost:8089/';

  users: User[];
  headers = new HttpHeaders();
  constructor(private httpClient: HttpClient, private token: TokenService) {
    this.headers = new HttpHeaders({'etc_token': token.getToken()});
  }

  login(email: string, pass: string) {
    this.headers = new HttpHeaders({'etc_token': this.token.getToken()});
    return this.httpClient.post(this.API_URL + 'user/login', JSON.stringify({'email': email, 'password': pass}));
  }

  get() {
    this.headers = new HttpHeaders({'etc_token': this.token.getToken()});
    const roles =  this.httpClient.get(this.API_URL + 'role', {headers: this.headers});
    const users = this.httpClient.get(this.API_URL + 'user', {headers: this.headers});
    return {'users': users, 'roles': roles};
  }

  getUser(id: number) {
    this.headers = new HttpHeaders({'etc_token': this.token.getToken()});
    return this.httpClient.get(this.API_URL + 'user/' + id, {headers: this.headers});
  }

  save(user: User) {
    this.headers = new HttpHeaders({'etc_token': this.token.getToken()});
    return this.httpClient.post(this.API_URL + 'user', JSON.stringify(user), {headers: this.headers});
  }

  edit(user: User) {
    this.headers = new HttpHeaders({'etc_token': this.token.getToken()});
    return this.httpClient.put(this.API_URL + 'user', JSON.stringify(user), {headers: this.headers});
  }

  delete(id: number) {
    this.headers = new HttpHeaders({'etc_token': this.token.getToken()});
    return this.httpClient.delete(this.API_URL + 'user/' + id, {headers: this.headers});
  }
}
