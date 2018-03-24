import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from '../register/register.component';
import {LoginComponent} from '../login/login.component';
import {MarketcapComponent} from '../marketcap/marketcap.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {path:'marketcap', component:MarketcapComponent}
];

@NgModule({
exports: [ RouterModule ],
imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
