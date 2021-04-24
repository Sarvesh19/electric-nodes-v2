import {HttpClient}     from '@angular/common/http';
import {Injectable}     from '@angular/core';
import {CommonHeader}   from './header.service';

//const SERVER_BASE_URL = "http://localhost:5000/";
const SERVER_BASE_URL = "https://chat-deck.herokuapp.com/";

//const SERVER_BASE_URL = "http://electricnodes-env-2.eba-ucms2ear.ap-south-1.elasticbeanstalk.com/"

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