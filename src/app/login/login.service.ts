import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  api: string = "http://meanstack-2018-5-mahmud-phortonssf.c9users.io:8080/api/AppUsers"
  
  login = {
    username: "",
    password: ""
  };
  
  constructor(private _http:HttpClient) { }
  
  getLogin(login) {
    return this._http.get(this.api)
  }
}
