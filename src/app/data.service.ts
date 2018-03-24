import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class DataService {
  constructor(private http:Http) { }
  getBittrex(){
    const url='http://localhost:3000/bittrexjson';
    return this.http.get(url)
    .map(res=>res.json());

  }

  getHitBtc(){
    const url='http://localhost:3000/hitbtcjson';
    return this.http.get(url)
    .map(res=>res.json());
  }

   getCryptopia(){
    const url='http://localhost:3000/cryptopiajson';
    return this.http.get(url)
    .map(res=>res.json());
  }

  getBtcToUsd(){
    const url='http://localhost:3000/coinbasebtc';
    return this.http.get(url)
    .map(res=>res.json());
  }

  getBittrexCurrencyName(){
    const url='https://bittrex.com/api/v1.1/public/getcurrencies';
    return this.http.get(url)
    .map(res=>res.json());
  }

 getETHToUsd(){
    const url='http://localhost:3000/coinbaseeth';
    return this.http.get(url)
    .map(res=>res.json());
  }

  getNZDTToUsd(){
    const url='http://localhost:3000/cryptopianzusd';
    return this.http.get(url)
    .map(res=>res.json());
  }
  getKuCoin(){
    const url="http://localhost:3000/kucoinjson";
    return this.http.get(url)
    .map(res=>res.json());
  }

}
