import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-getallnote',
  templateUrl: './getallnote.component.html',
  styleUrls: ['./getallnote.component.scss']
})
export class GetallnoteComponent implements OnInit {
  notelist:any;

  constructor(private note:NoteService) { }

  ngOnInit(): void {
  
    this.getallnotes()
  }
  getallnotes(){
    this.note.getallnotes().subscribe((res:any)=> {
      console.log(res);
      this.notelist=res.success;
      console.log(this.notelist);
    })
  }

  // receiveupdatedData($event:any) {
  //   console.log("Updated notes"+$event);
  //   this.getallnotes();
  //   }
    receiveMessagefromdisplaycard($event: any) {
      console.log("Inside get-all notes"+$event);
      this.getallnotes()
    } 
    receivedRefreshEventFromDisplaytoGetall($event:any){
      console.log("Display to GetAllNotes"+$event);
      this.getallnotes()
    }
    receiverRefreshEventCreate($event:any){
      console.log("Create to GetAllNotes"+$event);
      this.getallnotes()
    }
}