import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class GithubService {

  constructor(private http:Http) { }

  getGitUser(value){
    const Url='https://api.github.com/search/users?q=';
    return this.http.get(Url+value)
    .map(res=>res.json());
  }

}
