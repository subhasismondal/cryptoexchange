import { Component ,OnInit} from '@angular/core';
import {DataService} from './data.service';
import {MarketcapComponent} from './marketcap/marketcap.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  btctousd:Number;
  price:Number;
  exchangeName:String='';
  timer:any;
  defaultloadeddata=[];
  private action=-1;
  usdvalue:Number;
  ethtousd:Number;
  exchangename:any;
  isBittrexSelected:Boolean=false;
  isHitbtcSelected:Boolean=false;
  isCryptopiaSelected:Boolean=false;
  isKucoinselected:Boolean=false;
  isDefaultData:Boolean=true;
  isDefaultSearch:Boolean=true;
  constructor(private dataservice: DataService){
    }
  
   ngOnInit(){
    this.dataservice.getBittrex()
    .subscribe(coins=>{
      this.defaultloadeddata=coins;
       })

      this.dataservice.getBtcToUsd()
      .subscribe(usdvalue=>{
      this.price=usdvalue;
      console.log("btcToUsd"+usdvalue);
      this.btctousd=usdvalue.data.rates.USD;
    })

    this.dataservice.getETHToUsd()
  .subscribe(usdvalue=>{
    this.ethtousd=usdvalue.data.rates.USD;
  }) 
   
  }

  exchanges: any = [
    {name: 'Bittrex'},
    {name: 'Hitbtc'},
    {name: 'Cryptopia'},
    {name: 'Kucoin'}
  ];
  selectedExchange(exchange:any) {
    if(exchange=='Bittrex'){
    this.exchangename = exchange;
    this.isBittrexSelected = true;
    this.isHitbtcSelected = false;
    this.isCryptopiaSelected = false;
    this.isDefaultData=false;
    this.isKucoinselected=false;
    this.isDefaultSearch=false;
    console.log("bittrex selected");
    }else if(exchange=='Hitbtc'){
      this.exchangename = exchange;
      this.isHitbtcSelected = true;
      this.isCryptopiaSelected = false;
      this.isKucoinselected=false;
      this.isBittrexSelected = false;
      this.isDefaultData=false;
      this.isDefaultSearch=false;
      console.log("hitbtc selected");
    }else if(exchange=='Cryptopia'){
        this.exchangename = exchange;
        this.isCryptopiaSelected = true;
        this.isHitbtcSelected = false;
        this.isKucoinselected=false;
        this.isBittrexSelected = false;
        this.isDefaultData=false;
        this.isDefaultSearch=false;
        console.log("cryptopia selected");
    }else if(exchange=='Kucoin'){
        this.exchangename = exchange;
        this.isCryptopiaSelected = false;
        this.isHitbtcSelected = false;
        this.isBittrexSelected = false;
        this.isKucoinselected=true;
        this.isDefaultData=false;
        this.isDefaultSearch=false;
        console.log("kucoin selected");
      }else{
      console.log("Proper Exchange Not selected");
    }
}
  
  selectExchange(value){
  this.exchangeName=value;
  console.log(this.exchangeName);
  clearInterval(this.timer);
  if(value=='bittrex'){
    this.getBtcToUsd();
    console.log("inside selectExchange bittrex");
  }else if(value=='cryptopia'){

     this.getBtcToUsd();
     console.log("inside selectExchange cryptopia");
  }else if(value=='hitbtc'){
       this.getBtcToUsd();
  }else{
    this.getBtcToUsd();
  }
  this.timer= this.interval(value);
}

interval(value){
  if(value=='bittrex'){
     return setInterval(()=>{
    this.getBtcToUsd();

  },15000)
}else if(value=='cryptopia'){
    return setInterval(()=>{
    this.getBtcToUsd();
    console.log("inside ifelse cryptopia");
  },15000)
  }else if(value=='hitbtc'){
    return setInterval(()=>{
  },15000)
  } else{
    return setInterval(()=>{
  },15000)
  }
  
}
getBtcToUsd(){
   this.dataservice.getBtcToUsd()
    .subscribe(usdvalue=>{
      this.price=usdvalue;
      this.btctousd=usdvalue.data.rates.USD;
 })
}
getETHToUsd(){
  this.dataservice.getETHToUsd()
  .subscribe(usdvalue=>{
    this.ethtousd=usdvalue.data.rates.USD;
  })
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
    }else if(market=="BTC-ETH"){
      this.usdvalue=this.calculateToUsd(value);
    }else if (market.includes(btc)) { 
    console.log("Contains BTC"); 
    this.usdvalue=this.calculateToUsd(value);
  }else if(market.includes(eth)){ 
   console.log("calculate ETH" ); 
   this.usdvalue=this.calculateEthToUsd(value);
} else{
  this.usdvalue=value;
}
console.log(this.usdvalue);
  
  }
calculateToUsd(value){
  return (Number(value)*Number(this.btctousd));
}
calculateEthToUsd(value){
  return (Number(value)*Number(this.ethtousd));
}



    
  }
 
      


 
     

