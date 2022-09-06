import { registerLocaleData } from '@angular/common';
import { HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token:any
  constructor(private httpService:HttpService) { this.token = localStorage.getItem('token')}

  Registration(reqdata:any){
    let header = {
      headers:new HttpHeaders({
      'Content-type':'application/json'
              // 'Authorization':'token'

      })
      }
      return this.httpService.postService("registration",reqdata,false,header)
  }
  login(reqdata:any){
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
                // 'Authorization':'token'

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
    return this.httpService.postService("forgotPassword"+reqdata.Email,{},false,header)
  }


  reset(reqdata:any,token:any){
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+token

      })
    }
    return this.httpService.postService("resetPassword",reqdata,true,header)
  }
}

