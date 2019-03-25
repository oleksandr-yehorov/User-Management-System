import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {AppRoutingModule} from './app.routing.module';
import {UsersComponent} from './users/users.component';
import {UsersService} from './users/users.service';
import {AuthService} from './shared/services/auth.service';
import {RegisterService} from './shared/services/register.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [UsersService,
  AuthService,
  RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
