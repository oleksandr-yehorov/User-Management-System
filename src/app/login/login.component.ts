import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router, RouterModule} from '@angular/router';
// import {UsersService} from '../users/users.service';
// import {AuthService} from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  submitForm(form: NgForm){
    console.log('submitted form', form);
  }
  ngOnInit() {
  }

 openRegisterPage() {
    this.router.navigate(['/register']);
  }

  openUserPage() {
    this.router.navigate(['/users']);
  }

  /*constructor(private authService: AuthService) {}

  onSubmit() {
    const formData = this.form.value;

    this.usersService.getUserByEmail(formData.email)
      .subscribe((user: User) => {
        if (user) {
          if (user.password === formData.password) {
            // logic
          } else {
            this.showMessage('Пароль не верный');
          }
        } else {
          this.showMessage('Такого пользователя не существует');
        }
      });
  }*/
}
