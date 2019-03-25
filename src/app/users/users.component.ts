import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import {Response} from 'selenium-webdriver/http';

interface Users {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  id: number;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
   users: Users[] = [];

  constructor( private usersService: UsersService) {}

  loadUsers() {
    this.usersService.getUsers()
      .subscribe((users: Users[]) => {this.users = users; });
    this.usersService.getUsers()
      .subscribe((response) => console.log(response));
  }

  ngOnInit() {
    return this.usersService.getUsers();
  }

}
