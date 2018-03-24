import { Component, OnInit,Input } from '@angular/core';
import {DataService} from '../data.service';
import {SearchPipe} from '../filter.component';

@Component({
  selector: 'app-kucoin',
  templateUrl: './kucoin.component.html',
  styleUrls: ['./kucoin.component.css'],
   providers:[DataService]
})
export class KucoinComponent implements OnInit {
  @Input() exchange: any;
  kucoindatas=[];
  kucoinarrays=[];
  valueatkucoin:Boolean=false;
  constructor(private dataservice:DataService) { }

  ngOnInit() {
    this.dataservice.getKuCoin()
   .subscribe(kucoin=>{
     this.kucoindatas=kucoin;
     this.kucoinarrays=this.kucoindatas;
     this.valueatkucoin=true;
     console.log(this.kucoindatas);
   })
  }


  getKucoin(){
   console.log('getbittrex called');
   this.dataservice.getBittrex()
      .subscribe(users=>{
      this.kucoindatas=users;
      this.kucoinarrays=this.kucoindatas;
      this.valueatkucoin=true;
      console.log("get bittrex called");
      
    })
  }

  calculateChange(change,lastprice){
    return ((change)*100)/lastprice;
}

  

}
