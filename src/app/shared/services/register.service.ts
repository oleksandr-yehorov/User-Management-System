import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()

export class RegisterService {
//  private url = 'http://localhost:3000/users';
  constructor( private http: HttpClient ) {}

  addUser(email, password, firstName, lastName: string) {
    const data = {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName
    };
    return this.http.post('http://5c965c2d939ad600149a94eb.mockapi.io/users', data);
  }
}
