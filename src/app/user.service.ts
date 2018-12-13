import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  api: string = "http://meanstack-2018-5-mahmud-phortonssf.c9users.io:8080/api/AppUsers"
  
  login = {
    email: "",
    password: ""
  }
  
  register = {
    first: "",
    last: "",
    email: "",
    password: "", 
  }

  userId = window.sessionStorage.getItem ('userId');
  token = window.sessionStorage.getItem ('token');
  
  constructor(private _http:HttpClient) { }
  
  getLogin(userinfo) {
    return this._http.post(this.api + "/login", userinfo)
  }
  
  getRegister(userinfo) {
    return this._http.post(this.api, userinfo)
  }
  
  // saveStock(userId, token, userinfo) {
  //   return this._http.post(this.api + userId + "/favorites?access_token=" + token, userinfo)
  // }
}
