import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
token:any;
  constructor(private httpService:HttpService) { 
    this.token= localStorage.getItem('token')
  }
   
  createnotes(reqdata : any){
    console.log(reqdata);

    let header ={
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer '+ this.token
      })
    }
    return this.httpService.postService('CreateNotes',reqdata,true,header)
   }

  getallnotes(){

   let header ={
     headers: new HttpHeaders({
       'Content-type': 'application/json',
       'Authorization': 'Bearer '+this.token 
     })
   }
   return this.httpService.getService('displayNotes',false,header)

  }

  updatenote(data:any,id:any){
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization': 'Bearer '+this.token 
      })
  }
  return this.httpService.postService("updateNotes/"+id, data, true, header)
}

trashnotes(id:any){

  let header ={
    headers: new HttpHeaders({
      'Content-type': 'application/json',
        'Authorization':`Bearer  ${this.token}`
    })
  }
  return this.httpService.deleteService("deleteNotes/"+id,true,header)
  }

  archiveNotes(data:any){

    let headersOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': `Bearer  ${this.token}`		
      })
  
    }
    return this.httpService.postService("ArchieveNotesById",data,true,headersOption)
  }

  ColorNote(data:any){
    console.log(data.color)
      let headersOption = {
        headers: new HttpHeaders({
          'Content-type': 'application/json',
          'Authorization': `Bearer  ${this.token}`		
        })
    
      }
      return this.httpService.postService("colorNoteById",data,true,headersOption)
      
    }

    notePinned(reqData:any){
      let headersOption = {
        headers: new HttpHeaders({
          'Content-type': 'application/json',
          'Authorization': `Bearer ${this.token}`	
        })
      }
       return this.httpService.postService("pinNotesById",reqData,true,headersOption)
    }
}