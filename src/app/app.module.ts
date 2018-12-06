import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { Routes, RouterModule } from '@angular/router';

import { routes } from './app-routing';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { StockService } from './stock.service';
import { RegistrationComponent } from './registration/registration.component';
import { UserService } from './user.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainpageComponent,
    RegistrationComponent,
  ],
  
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ClarityModule,
    BrowserAnimationsModule,
    ChartsModule,
    routes
  ],
  
  providers: [StockService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
