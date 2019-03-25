import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../models/user.model';

@Injectable()
export class AuthService {
  constructor(private Http: HttpClient) {}

  // getUserByEmail(email: string): Observable<User> {
   // return this.http.get(`http://localhost:3000/users?email=${email}`);
  // }

}
