import { Component, OnInit, Input, Output } from '@angular/core';
import {DataService} from '../data.service';
import {SearchPipe} from '../filter.component';

@Component({
  selector: 'app-hitbtc',
  templateUrl: './hitbtc.component.html',
  styleUrls: ['./hitbtc.component.css']
})
export class HitbtcComponent implements OnInit {
   @Input() exchange;
  hitbtcdatas=[];
  price:Number;
  btctousd:Number;
  ethtousd:Number;
  valueathitbtc:Boolean=false;
  btcvalueathitbtc:Number;
  usdvalue:Number;
  private action=-1;
  constructor(private dataservice:DataService) {
}

  ngOnInit() {
   this.dataservice.getHitBtc()
   .subscribe(hitbtc=>{
     this.hitbtcdatas=hitbtc;
     this.valueathitbtc=true;
     console.log(this.hitbtcdatas);
   })
    this.dataservice.getBtcToUsd()
    .subscribe(usdvalue=>{
      this.price=usdvalue;
      this.btctousd=usdvalue.data.rates.USD;

    })

    this.dataservice.getETHToUsd()
    .subscribe(ethtousdvalue=>{
      this.price=ethtousdvalue;
      this.ethtousd=ethtousdvalue.data.rates.USD;

    })
};
  
  getHitBtc(){
   this.dataservice.getHitBtc()
   .subscribe(hitbtc=>{
     this.hitbtcdatas=hitbtc;
     this.valueathitbtc=true;
     console.log(this.hitbtcdatas);
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

calculateEthToUsd(value){
  return (Number(value)*Number(this.ethtousd));
}

calculateChange(lastprice,previousprice){
    return ((lastprice-previousprice)*100)/lastprice;
}

calculateValue(market,value,i){
    var btc = "BTC";
    var eth="ETH";
    this.action=i;
    if(market=="USDT-BTC"){
      this.usdvalue=value;
    } else if(market=="USDT-ETH"){
      this.usdvalue=value;
    }else if (market.includes(btc)) { 
    console.log("Contains BTC"); 
    this.usdvalue=this.calculateToUsd(value);
  }else if(market.includes(eth)){ 
   console.log(" calculate ETH" ); 
   this.usdvalue=this.calculateEthToUsd(value);
} else{
  this.usdvalue=value;
}
console.log(this.usdvalue);
  
  }
  }

