import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login = {
    username: "",
    password: ""
  }
  results;

  constructor(public _api:LoginService){}

  getLogin() {
    this._api.getLogin(this.login)
    .subscribe((res:any) => {
      this.results = res.results;
      console.log(res);
    })
  }
}
  