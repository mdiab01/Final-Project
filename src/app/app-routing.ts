import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { RegistrationComponent } from './registration/registration.component';
 
const router: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'registration', component: RegistrationComponent },
    { path: 'mainpage', component: MainpageComponent }
  ];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
