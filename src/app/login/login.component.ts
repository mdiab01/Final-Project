import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login = {
    email: "",
    password: ""
  }
  results;

  constructor(public _api:LoginService, private router:Router){}

  getLogin() {
    this._api.getLogin(this.login)
    .subscribe((response: any) => {
      this.results = response;
      window.sessionStorage.setItem('token', response.token);
      window.sessionStorage.setItem('userId', response.userId);
      this.router.navigateByUrl('mainpage');
    })
  }
}
  