import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/Rx'


@Injectable()
export class BackenddataService {
  constructor(private http:Http) { }

  getQuote(){
    const url='http://localhost:3000/api/users/';
    return this.http.get(url)
    .map(res=>res.json());
  }
getUser(){
  const url='http://localhost:3000/api/users/';
    return this.http.get(url)
    .map(res=>res.json());  
}

addUser(newUser){
  let headers=new Headers();
  headers.append('content-Type','application/json');
  const url='http://localhost:3000/api/users/';
  return this.http.post(url,newUser,{headers:headers})
  .map(res=>res.json())
  
}

}


