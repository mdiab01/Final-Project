import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  register = {
   firstName: "",
   lastName: "",
   email: "",
   password: "",
  }
  results;
  

  constructor(public _api:UserService, private router:Router) { }
  
   getRegister() {
    //   console.log(this.register);
    this._api.getRegister(this.register)
    .subscribe((response: any) => {
      this.results = response;
      window.sessionStorage.setItem('token', response.token);
      window.sessionStorage.setItem('userId', response.userId);
      this.router.navigateByUrl('mainpage');
    })
  }
  
  }
   

