import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpModule,BrowserXhr} from '@angular/http';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule} from './app-routing/app-routing.module';
import { LoginComponent } from './login/login.component';
import {DataService} from './data.service';
import { MarketcapComponent } from './marketcap/marketcap.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {CustExtBrowserXhr} from './cust-ext-browser-xhr';
import {DropdownModule} from 'ngx-dropdown';
import {NgxPaginationModule} from 'ngx-pagination';
import {AgGridModule} from 'ag-grid-angular/main';
import {SearchPipe} from './filter.component';
import { HitbtcComponent } from './hitbtc/hitbtc.component';
import { CryptopiaComponent } from './cryptopia/cryptopia.component';
import { KucoinComponent } from './kucoin/kucoin.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    MarketcapComponent,
    DashboardComponent,
    SearchPipe,
    HitbtcComponent,
    CryptopiaComponent,
    KucoinComponent
  ],
  imports: [
    BrowserModule,HttpModule,FormsModule,InfiniteScrollModule,ReactiveFormsModule,AppRoutingModule,DropdownModule,NgxPaginationModule,AgGridModule.withComponents(
      [
        MarketcapComponent
      ])
  ],
  providers: [
    DataService,
    {provide: BrowserXhr, useClass:CustExtBrowserXhr},
   ],
  bootstrap: [AppComponent,]
})
export class AppModule { }
