import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

interface User {

}



@Injectable({
  providedIn: 'root'
})

export class UserLoginService {

  constructor(private http: HttpClient) { }

private baseUri = "https://electric-nodes-backend.herokuapp.com/";

//private baseUri ="http://localhost:5000/"; 

  private params: any;
  private options: any;



  getUser(user: any): Observable<any> {
    return this.http.post(this.baseUri + 'login' , user);
  }
  
  registerUser(userDetail: any): Observable<any> {
    return this.http.post(this.baseUri + 'signup', userDetail);

  }

  forgotPassword(userForgotPass: any): Observable<any> {
       return this.http.post(this.baseUri + 'forgotpassword', userForgotPass);
 
  }

  getUserTest(): Observable<any>{
        return this.http.get(this.baseUri +'test');

  }

  uploadProfileImg(formData : any): Observable<any>{
      return this.http.post(this.baseUri +'uploadimg', formData);

  }
  getUserDetail(username : any): Observable<any>{
       return this.http.post(this.baseUri + 'userdetail', username);

  }







}