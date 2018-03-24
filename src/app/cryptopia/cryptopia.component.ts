import { Component, OnInit,Input } from '@angular/core';
import {DataService} from '../data.service';
import {SearchPipe} from '../filter.component';

@Component({
  selector: 'app-cryptopia',
  templateUrl: './cryptopia.component.html',
  styleUrls: ['./cryptopia.component.css']
})
export class CryptopiaComponent implements OnInit {
  @Input() exchange;
  cryptopiadatas=[];
  valueatcryptopia:Boolean=false;
  price:Number;
  btctousd:Number;
  nzdttousd:Number;
  usdvalue:any;
  private action=-1;
  constructor( private dataservice:DataService) { }

  ngOnInit() {
     this.dataservice.getCryptopia()
   .subscribe(cryptopia=>{
     this.cryptopiadatas=cryptopia;
     this.valueatcryptopia=true;
     console.log(this.cryptopiadatas);
     console.log(" Cryptopia called");
   })
    this.dataservice.getBtcToUsd()
    .subscribe(usdvalue=>{
      this.price=usdvalue;
      this.btctousd=usdvalue.data.rates.USD;
 })
  }

  getCryptopia(){
   this.dataservice.getCryptopia()
   .subscribe(cryptopia=>{
     this.cryptopiadatas=cryptopia;
     this.valueatcryptopia=true;
     console.log(this.cryptopiadatas);
     console.log(" Cryptopia called");
   })
 }
 getBtcToUsd(){
   this.dataservice.getBtcToUsd()
    .subscribe(usdvalue=>{
      this.price=usdvalue;
      this.btctousd=usdvalue.data.rates.USD;
 })
}

calculateToUsd(value){
  return (Number(value)*Number(this.btctousd));
}

calculateNZDTToUsd(value){
  return (Number(value)*Number(this.nzdttousd));
}

calculateChange(lastprice,previousprice){
    return ((lastprice-previousprice)*100)/lastprice;
}

calculateValue(market,value,i){
    var btc = "BTC";
    var ltc="LTC";
    var doge="DOGE";
    var nzdt="NZDT";
    this.action=i;
    if(market=="BTC/USDT"){
      this.usdvalue=value;
    } else if(market=="USDT-ETH"){
      this.usdvalue=value;
    }else if (market.includes(btc)) { 
    console.log("Contains BTC"); 
    this.usdvalue=this.calculateToUsd(value);
  }else if(market.includes(nzdt)){ 
   console.log(" calculate ETH" ); 
   this.usdvalue=this.calculateNZDTToUsd(value);
} else{
  this.usdvalue=value;
}
console.log(this.usdvalue);
  
  }

}
