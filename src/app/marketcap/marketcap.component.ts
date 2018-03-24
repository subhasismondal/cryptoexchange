import { Component, OnInit,OnDestroy,Input} from '@angular/core';
import {DataService} from '../data.service';
import {MatTableDataSource} from '@angular/material'
import {SearchPipe} from '../filter.component';

@Component({
  selector: 'app-marketcap',
  templateUrl: './marketcap.component.html',
  styleUrls: ['./marketcap.component.css'],
  providers:[DataService]
})
export class MarketcapComponent implements OnInit, OnDestroy{
  @Input() exchange: any;
 bittrexdatas=[];
 timer:any;
 private action=-1;
 message:String;
 exchangeName:String='';
 valueatbittrex:Boolean=true;
 btctousd:Number;
 price:Number;
 currecynames=[];
 btcvalueatbittrex:Number;
usdvalue:any;
ethtousd:Number;
finalPrice:Number;
showHide:Boolean=false;
  constructor(private dataservice:DataService) {   
   }

ngOnInit() {
  this.dataservice.getBittrex()
    .subscribe(coins=>{
      this.bittrexdatas=coins;
    })
    this.dataservice.getBtcToUsd()
    .subscribe(usdvalue=>{
      this.price=usdvalue;
      this.btctousd=usdvalue.data.rates.USD;

    })
};

 ngOnDestroy(){
    clearInterval(this.timer);
   console.log("Inside Destroy");
   }


 getBittrex(){
   console.log('getbittrex called');
   this.dataservice.getBittrex()
      .subscribe(users=>{
      this.bittrexdatas=users;
      this.valueatbittrex=true;
      console.log(users);
      
      })
    
      
    }

 getBtcToUsd(){
   this.dataservice.getBtcToUsd()
    .subscribe(usdvalue=>{
      this.price=usdvalue;
      this.btctousd=usdvalue.data.rates.USD;
 })
}

getBittrexCurrencyName(){
  this.dataservice.getBittrexCurrencyName()
  .subscribe(currencyname=>
  this.currecynames=currencyname);
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
