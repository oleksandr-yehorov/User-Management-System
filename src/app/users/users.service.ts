import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()

export class UsersService {
  // private url = '5c965c2d939ad600149a94eb.mockapi.io/users';
  constructor( private http: HttpClient ) {}

  getUsers() {
    return this.http.get('http://5c965c2d939ad600149a94eb.mockapi.io/users');
  }
}
