import {HttpClient}     from '@angular/common/http';
import {Injectable}     from '@angular/core';
import {CommonHeader}   from './header.service';

const SERVER_BASE_URL = "http://localhost:8185/";
//const SERVER_BASE_URL = "https://chat-deck.herokuapp.com/";

@Injectable()
export class XHRHandler {
    
  constructor(private httpClient: HttpClient) {}

  doGet(path : string) {
    return this.httpClient.get(SERVER_BASE_URL + path);
  }

  doPost(path : string, reqData : any) {
    return this.httpClient.post(SERVER_BASE_URL + path, JSON.stringify(reqData), {headers: CommonHeader.getCommonHeaders()});
  }
}