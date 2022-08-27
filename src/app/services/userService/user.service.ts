import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService:HttpService) { }

  Registration(reqdata:any){
    let header = {
      headers:new HttpHeaders({
      'Content-type':'application/json'
      })
      }
      return this.httpService.postService("registration",reqdata,false,header)
  }
  login(reqdata:any){
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
      })
    }
    return this.httpService.postService("login",reqdata,false,header)
  }
  forgot(reqdata:any){
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        
      })
    }
    return this.httpService.postService("forgotPassword?email="+reqdata.Email,{},false,header)
  }

  
  reset(reqdata:any,token:any){
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization': '42|o0K9K5c9DQ4ByLnQEcxLW9H0aZLH7iOippBhRjNF'
        
      })
    }
    return this.httpService.postService("resetPassword",reqdata,true,header)
  }
}

